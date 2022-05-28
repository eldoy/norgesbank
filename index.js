const fetch = require('node-fetch')

module.exports = async function(options = {}) {
  let { from = 'USD', to = 'NOK', date } = options

  if (!date) {
    date = new Date()
    date.setDate(date.getDate()-1)
  }

  if (typeof date == 'object') {
    date = date.toISOString().split('T')[0]
  }

  const url = `https://data.norges-bank.no/api/data/EXR/B.${from}.${to}.SP?format=sdmx-json&startPeriod=${date}&endPeriod=${date}&locale=en`

  const response = await fetch(url)
  const data = await response.json()

  let rate
  try {
    rate = data.data.dataSets[0].series['0:0:0:0'].observations['0'][0]
  } catch(e) {
    console.log('Cannot find rate in dataset')
  }
  return rate
}
