import Web3 from "web3/dist/web3.min";
let web3 = new Web3()
web3.setProvider(window.ethereum)
console.log(window.ethereum)
export default web3