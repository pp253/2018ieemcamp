const Metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const jade = require('metalsmith-jade')
const layouts = require('metalsmith-layouts')
const permalinks = require('metalsmith-permalinks')
const SitemapGenerator = require('sitemap-generator')

const metadata = {
  title: '2018清大工程領袖營',
  description: '誰說工程一定要這麼嚴肅？2018清大工程領袖營歡迎您～',
  url: 'https://2018ieemcamp.me/',
  keywords:
    '2018,清華,大學,清大,清華大學,暑假,暑期,夏,夏季,高中,營隊,清大工工,清大工管,工業工程,工工,工程領袖,工程領袖營,清大工業工程營,清大工工營,工工營',
  image: 'https://2018ieemcamp.me/src/image/banner.png'
}

Metalsmith(__dirname)
  .metadata(metadata)
  .source('./src/view')
  .destination('./')
  .clean(false)
  .use(
    jade({
      locals: metadata
    })
  )
  .use(markdown())
  .use(permalinks())
  .use(
    layouts({
      engine: 'jade',
      directory: './src/templates'
    })
  )
  .build(function(err, files) {
    if (err) {
      throw err
    }
    console.log('files created')
  })

// create generator
const generator = SitemapGenerator('https://2018ieemcamp.me', {
  stripQuerystring: false
})

generator.on('done', () => {
  console.log('sitemaps created')
})

// start the crawler
generator.start()
