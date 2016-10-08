
const url = require('url')
const space = require('./index')

const getOptions = query => Object.keys(query).reduce((obj, b) => {
  obj[b] = query[b].split(',')
    .map(v => {
      const num = parseFloat(v)
      return isNaN(num) ? v : num
    })
  return obj
}, {})

module.exports = async function (req, res) {
  const { query } = url.parse(req.url, true)
  const options = getOptions(query)
  const css = space(options)

  return  css
}

