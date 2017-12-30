
var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var jade = require('metalsmith-jade')
var layouts = require('metalsmith-layouts')
var permalinks = require('metalsmith-permalinks')

const metadata = {
  title: '2018清大工程領袖營',
  description: "It's about saying »Hello« to the World.",
  url: "https://2018ieemcamp.me/"
}

Metalsmith(__dirname)
  .metadata(metadata)
  .source('./src/view')
  .destination('./')
  .clean(false)
  .use(jade({
    locals: metadata
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'jade',
    directory: './src/templates'
  }))
  .build(function (err, files) {
    if (err) { throw err; }
  });
