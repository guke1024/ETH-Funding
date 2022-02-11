let solc = require('solc') //0.4.25
let fs = require('fs')
let sourceCode = fs.readFileSync('./contracts/Lottery.sol', 'utf-8')

let output = solc.compile(sourceCode, 1)
module.exports = output['contracts'][':Lottery']

