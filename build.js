
var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var layouts = require('metalsmith-layouts')
var permalinks = require('metalsmith-permalinks')

Metalsmith(__dirname)
  .metadata({
    title: '2018清大工程領袖營',
    description: "It's about saying »Hello« to the World.",
    url: "https://2018ieemcamp.me/"
  })
  .source('./src')
  .destination('./')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function (err, files) {
    if (err) { throw err; }
  });
