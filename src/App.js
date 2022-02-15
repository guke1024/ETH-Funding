import web3 from './utils/initWeb3'
import CardExampleCard from './display/ui'
import React, {Component} from 'react';
import {factoryInstance, newFundingInstance} from "./eth/instance";
import TabCenter from "./display/TabCenter";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentAccount: '',
        }
    }

    async UNSAFE_componentWillMount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
        let currentAccount = await window.ethereum.selectedAddress
        console.log(currentAccount)
        let platformManager = await factoryInstance.methods.platformManager().call()
        console.log('manager:', platformManager)
        // let manager = await lotteryInstance.methods.manager().call()
        // let round = await lotteryInstance.methods.round().call()
        // let winner = await lotteryInstance.methods.winner().call()
        // let playerCounts = await lotteryInstance.methods.getPlayersCount().call()
        // let balanceWei = await lotteryInstance.methods.getBalance().call()
        // let balance = web3.utils.fromWei(balanceWei, 'ether')
        // let players = await lotteryInstance.methods.getPlayers().call()
        // let isShowButton = currentAccount === manager.toLowerCase() ? 'inline' : 'none'
        this.setState({
            // manager,
            // round,
            // winner,
            // playerCounts,
            // balance,
            // players,
            currentAccount,
            // isClicked: false,
            // isShowButton
        })
    }

    render() {
        return (
            <div>
                <h1>HGNU ACM 众筹</h1>
                <p>当前账户：{this.state.currentAccount}</p>
                <TabCenter/>
            </div>
        );
    }
}

export default App;