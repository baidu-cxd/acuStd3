export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^(https?:|mailto:)/

// 补缺少的两个

export function pathToComponentName (path) {
  if (path.charAt(path.length - 1) === '/') {
    return `page${path.replace(/\//g, '-') + 'index'}`
  } else {
    return `page${path.replace(/\//g, '-').replace(/\.html$/, '')}`
  }
}

export function findPageForPath (pages, path) {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page.path === path) {
      return page
    }
  }
  return {
    path: '',
    frontmatter: {}
  }
}

// v2 对应函数

// 解算 link 内容的主函数
export function resolveSubSidebarItem (item, nowPage, navObj, basePath) {
  // 首先判断数据是链接还是编组
  // 如果内容是一个 string 那么一定是一个链接
  let resolvedItem = {}
  if (typeof item === 'string') {
    resolvedItem = Object.assign({
      link: resolveLinkByItem(item, nowPage, basePath),
      kind: 'single',
      text: resolveTextByItem(item, nowPage, navObj, basePath)
    })   
  }
  // 如果内容是一个对象，那么先看对象内有没有 children
  if (typeof item === 'object' && !item.children) {
    resolvedItem = Object.assign({
      link: item.link,
      kind: 'single',
      text: resolveTextByItem(item.link, nowPage, navObj, basePath)
    })   
  }
  // 如果内容是有 children 的对象，那么它是一个组
  if (typeof item === 'object' && item.children) {
    resolvedItem = Object.assign({
      kind: 'group',
      text: item.text || '缺少组命名字',
      groupUrl: item.groupUrl,
      children: item.children
    })     
  }
  return resolvedItem
}

// 结算出链接

export function resolveLinkByItem (link, nowPage, basePath ) {
  if (link === '/' && !basePath) return  '/' + nowPage + '/'
  if (link === '/' && basePath) return  '/' + nowPage + '/' + basePath + '/'  
  if (link !== '/' && basePath) return '/' + nowPage + '/' + basePath + '/' + link + '.html'
  return '/' + nowPage +  '/' + link + '.html'
}

// 解算 link 内容的中解算出 link 对应 text 的函数

export function resolveTextByItem (link, nowPage, navObj, basePath) {
  let realLink = resolveLinkByItem (link, nowPage, basePath ) 
  // console.log(navObj)
  const title = resolveTextByRealLink (link, realLink, navObj)
  return title
}

// 用完整链接结算出 text 的函数

export function resolveTextByRealLink (link, realLink, navObj) {
  let obj = {};
  navObj.forEach(function (v) {
      obj[v.path] = v
  })
  const fulldata = obj[realLink]
  let title 
  if (fulldata) {
    title = fulldata.title
  } else {
    if (link === "/") {
      title = "缺少文档 ：README.md"
    } else {
      title = "缺少文档 ：" + link + ".md"
    }
  }
  return title
}

// 解算 prev next 

export function resolvePrevNext (nowPage, themeConfig, navObj) {
  const dataPath = nowPage.split('/')[1] + 'Nav' // 解算出导航栏使用的数据名
  const navData = themeConfig[dataPath]
  var result={};



  // 这里有空可以重构下，感觉这两个方法可以合并
  patJson(navData,result,1,nowPage.split('/')[1]); // 方法步骤一: 拍平数据
  let newResult = [] // 方法步骤二: 重新排序
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      const element = result[key];
      newResult.push(element)
    }
  }


  // 判断当前页面在哪里
  let prevNextData = {
    "length" : newResult.length,
    "now" : " ",
    "prev" : { "link" : " " , "text" : " "},
    "next" : { "link" : " " , "text" : " "},
  }
  // 获得前后页面的标题和链接
  Object.keys(newResult).forEach(function(key){
    if (nowPage === newResult[key]){
      prevNextData.now = Number(key)
      prevNextData.prev.link = newResult[Number(key) - 1]
      prevNextData.prev.text = resolveTextByRealLink (" " ,prevNextData.prev.link, navObj)
      prevNextData.next.link = newResult[Number(key) + 1]
      prevNextData.next.text = resolveTextByRealLink (" " ,prevNextData.next.link, navObj)
      // console.log(key,newResult[key]);
    }
  });
  return prevNextData
}

function patJson(o,resobj,nowItem,nowPage,groupUrl) {
  var keys = Object.keys(o);
  keys.forEach(function(item){
      var v = o[item];
      if (v === '/'){
        v = '/'
      }
      if(v.children){
          nowItem = nowItem + 1 
          groupUrl = v.groupUrl
          patJson(v.children,resobj,nowItem,nowPage,groupUrl);
      }else{
          if (groupUrl){
            if (v === '/'){
              v = ''
            } else {
              v = v + '.html'
            }
            resobj[nowItem + item] =  '/' +  nowPage + '/' + groupUrl + '/' + v;
          } else {resobj[nowItem + item] =  '/' + nowPage + v;}
      }
  })
}

// 原有 vuepress 函数

export function normalize (path) {
  return path
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function getHash (path) {
  const match = path.match(hashRE)
  if (match) {
    return match[0]
  }
}

export function isExternal (path) {
  return outboundRE.test(path)
}

export function isMailto (path) {
  return /^mailto:/.test(path)
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

export function isActive (route, path) {
  const routeHash = route.hash
  const linkHash = getHash(path)
  if (linkHash && routeHash !== linkHash) {
    return false
  }
  const routePath = normalize(route.path)
  const pagePath = normalize(path)
  return routePath === pagePath
}

export function resolvePage (pages, rawPath, base) {
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalize(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].path) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(rawPath)
      })
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}

function resolvePath (relative, base, append) {
  const firstChar = relative.charAt(0)
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  const stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

export function resolveSidebarItems (page, route, site, localePath) {
  const pageSidebarConfig = page.frontmatter.sidebar
  if (pageSidebarConfig === 'auto') {
    return resolveHeaders(page)
  }
  const { pages, themeConfig } = site

  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
  if (!sidebarConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(route, sidebarConfig)
    return config
      ? config.map(item => resolveItem(item, pages, base))
      : []
  }
}

function resolveHeaders (page) {
  const headers = groupHeaders(page.headers || [])
  return [{
    type: 'group',
    collapsable: false,
    title: page.title,
    children: headers.map(h => ({
      type: 'auto',
      title: h.title,
      basePath: page.path,
      path: page.path + '#' + h.slug,
      children: h.children || []
    }))
  }]
}

export function groupHeaders (headers) {
  // group h3s under h2
  headers = headers.map(h => Object.assign({}, h))
  let lastH2
  headers.forEach(h => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter(h => h.level === 2)
}

export function resolveNavLinkItem (linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  })
}

export function resolveMatchingConfig (route, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    }
  }
  for (const base in config) {
    if (ensureEndingSlash(route.path).indexOf(base) === 0) {
      return {
        base,
        config: config[base]
      }
    }
  }
  return {}
}

function ensureEndingSlash (path) {
  return /(\.html|\/)$/.test(path)
    ? path
    : path + '/'
}

function resolveItem (item, pages, base, isNested) {
  if (typeof item === 'string') {
    return resolvePage(pages, item, base)
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    })
  } else {
    if (isNested) {
      console.error(
        '[vuepress] Nested sidebar groups are not supported. ' +
        'Consider using navbar + categories instead.'
      )
    }
    const children = item.children || []
    return {
      type: 'group',
      title: item.title,
      children: children.map(child => resolveItem(child, pages, base, true)),
      collapsable: item.collapsable !== false
    }
  }
}
