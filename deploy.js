let {bytecode, interface} = require('./complie')
let Web3 = require('web3')
// let HDWalletProvider = require('truffle-hdwallet-provider')
let web3 = new Web3()
let terms = 'prosper goose fiscal tourist fancy derive stick attend lab heart man mention'
// let netIp = 'http://127.0.0.1:7545'
// let provider = new HDWalletProvider(terms, netIp)
web3.setProvider('HTTP://127.0.0.1:7545')

let contract = new web3.eth.Contract(JSON.parse(interface))

let deploy = async () => {
    let accounts = await web3.eth.getAccounts()
    console.log('accounts :', accounts)
    let instance = await contract.deploy({
        data: bytecode,
    }).send({
        from: accounts[0],
        gas: '3000000',
        // gasPrice: '1',
    })
    console.log('instance address :', instance.options.address)
}

deploy()
