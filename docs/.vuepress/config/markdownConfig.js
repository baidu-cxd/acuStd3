/**
 * @file markdownConfig.js
 * @author wangyihan05@baidu.com
 */

const markdownConfig = {
    // markdown-it-toc 的选项
    toc: { includeLevel: [2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-footnote')),
      // 色块生成器
      md.use(require('markdown-it-container'), 'color', {
        validate: function(params) {
          return params.trim().match(/^color\s+(.*)$/);
        },
        render: function (tokens, idx) {
          const m = tokens[idx].info.trim().match(/^color\s+(.*)$/);
          if (tokens[idx].nesting === 1) {
            const colorTrans = md.utils.escapeHtml(m[1]);
            return '<div onclick="alert(\'已复制色号到粘贴板\')" class="colorBox" style="background:' +
            colorTrans + '" data-clipboard-text="' + colorTrans
            + '"><p>' + colorTrans + '</p>\n';
          } else {
            return '</div>\n';
          }
        }
      });
      // 色块生成器-浅色
      md.use(require('markdown-it-container'), 'color-l', {
        validate: function(params) {
          return params.trim().match(/^color-l\s+(.*)$/);
        },
        render: function (tokens, idx) {
          const m = tokens[idx].info.trim().match(/^color-l\s+(.*)$/);
          if (tokens[idx].nesting === 1) {
            const colorTrans = md.utils.escapeHtml(m[1]);
            return '<div onclick="alert(\'已复制色号到粘贴板\')" class="colorBox light" style="background:' +
            colorTrans + '" data-clipboard-text="' + colorTrans
            + '"><p>' + colorTrans + '</p>\n';
          } else {
            return '</div>\n';
          }
        }
      });
      // more
      md.use(require('markdown-it-container'), 'more', {
        validate: function(params) {
          return params.trim().match(/^more\s+(.*)$/);
        },
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '<markdown-more>\n'
          } else {
            return ' ';
          }
        }
      });
      md.use(require('markdown-it-container'), 'more-end', {
        validate: function(params) {
          return params.trim().match(/^more-end\s+(.*)$/);
        },
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '</markdown-more>\n'
          } else {
            return ' ';
          }
        }
      });
      // 栅格布局生成器
      md.use(require('markdown-it-container'), 'raw', {
        validate: function(params) {
          return params.trim().match(/^raw\s+(.*)$/);
        },
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '<div class="p-raw">\n'
          } else {
            return ' ';
          }
        }
      });
      md.use(require('markdown-it-container'), 'col', {
        validate: function(params) {
          return params.trim().match(/^col\s+(.*)$/);
        },
        render: function (tokens, idx) {
          const m = tokens[idx].info.trim().match(/^col\s+(.*)$/);
          if (tokens[idx].nesting === 1) {
            const colType = md.utils.escapeHtml(m[1]).replace(/[:]/g,"");;
            return '<div class="p-col' + ' ' + 'col-' + colType
            + '">\n'
          } else {
            return ' ';
          }
        }
      });
      md.use(require('markdown-it-container'), 'end', {
        validate: function(params) {
          return params.trim().match(/^end\s+(.*)$/);
        },
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '</div>\n'
          } else {
            return ' ';
          }
        }
      });
      md.use(require('markdown-it-container'), 'raw-end', {
        validate: function(params) {
          return params.trim().match(/^raw-end\s+(.*)$/);
        },
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '</div>\n'
          } else {
            return ' ';
          }
        }
      });
      md.use(require('markdown-it-container'), 'col-end', {
        validate: function(params) {
          return params.trim().match(/^col-end\s+(.*)$/);
        },
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '</div>\n'
          } else {
            return ' ';
          }
        }
      });
      md.use(require('markdown-it-abbr'));
    }
  }

  module.exports = markdownConfig;