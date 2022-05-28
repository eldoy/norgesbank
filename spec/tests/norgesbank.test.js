const assert = require('assert')
const norgesbank = require('../../index.js')

const it = {}, x = {}

it['should fetch a currency'] = async function() {
  const rate = await norgesbank()
  assert.ok(rate)
}

module.exports = it
