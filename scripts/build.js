#!/usr/bin/env node
const fs = require('fs')
const uglify = require('uglify-js')
const norgesbank = require('../index.js')

const code = `window.norgesbank = ${norgesbank}`

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

fs.writeFileSync('./dist/nb.js', code)

const result = uglify.minify(code)
fs.writeFileSync('./dist/nb-min.js', result.code)
