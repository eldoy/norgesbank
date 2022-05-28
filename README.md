# Norges Bank

Currently just fetches the exchange rate between two currencies at a given date.

### Install

```
npm i norgesbank
```

### Usage

```js
const norgesbank = require('norgesbank')

const options = {
  to: 'NOK',
  from: 'USD',
  date: new Date() - 1 // yesterday is the default
}

const rate = norgesbank(options)
// 9.3453
```

MIT Licensed. Enjoy!
