let solc = require('solc') //0.4.26
let fs = require('fs')
let sourceCode = fs.readFileSync('./contracts/FundingFactory.sol', 'utf-8')

let output = solc.compile(sourceCode, 1)
console.log(output)
module.exports = output['contracts'][':FundingFactory']

