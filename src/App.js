import web3 from './utils/initWeb3'
import CardExampleCard from './display/ui'
import React, {Component} from 'react';
import lotteryInstance from "./eth/lotteryInstance";

class App extends Component {
    constructor() {
        super();
        this.state = {
            manager: '',
            round: '',
            winner: '',
            playerCounts: 0,
            balance: 0,
            players: [],
            currentAccount: '',
            isClicked: false,
            isShowButton: '',
        }
    }

    play = async () => {
        this.setState({isClicked: true})
        try {
            await lotteryInstance.methods.play().send({
                from: this.state.currentAccount,
                value: web3.utils.toWei('1', 'ether'),
                gas: '3000000',
            })
            this.setState({isClicked: false})
            window.location.reload()
            alert('投注成功')
        } catch (e) {
            this.setState({isClicked: false})
            alert('投注失败')
            console.log(e)
        }
    }
    DrawWinner = async () => {
        this.setState({isClicked: true})
        try {
            await lotteryInstance.methods.DrawWinner().send({
                from: this.state.currentAccount,
                gas: '3000000',
            })
            this.setState({isClicked: false})
            let winner = await lotteryInstance.methods.winner().call()
            window.location.reload()
            alert(`开奖成功\n中奖人：${winner}`)
        } catch (e) {
            this.setState({isClicked: false})
            alert('开奖失败')
            console.log(e)
        }
    }
    refund = async () => {
        this.setState({isClicked: true})
        try {
            await lotteryInstance.methods.refund().send({
                from: this.state.currentAccount,
                gas: '3000000',
            })
            this.setState({isClicked: false})
            window.location.reload()
            alert('退奖成功')
        } catch (e) {
            this.setState({isClicked: false})
            alert('退奖失败')
            console.log(e)
        }
    }

    async UNSAFE_componentWillMount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
        let currentAccount = await window.ethereum.selectedAddress
        let manager = await lotteryInstance.methods.manager().call()
        let round = await lotteryInstance.methods.round().call()
        let winner = await lotteryInstance.methods.winner().call()
        let playerCounts = await lotteryInstance.methods.getPlayersCount().call()
        let balanceWei = await lotteryInstance.methods.getBalance().call()
        let balance = web3.utils.fromWei(balanceWei, 'ether')
        let players = await lotteryInstance.methods.getPlayers().call()
        let isShowButton = currentAccount === manager.toLowerCase() ? 'inline' : 'none'
        this.setState({
            manager,
            round,
            winner,
            playerCounts,
            balance,
            players,
            currentAccount,
            isClicked: false,
            isShowButton
        })
    }

    render() {
        return (
            <div>
                <CardExampleCard
                    manager={this.state.manager}
                    round={this.state.round}
                    winner={this.state.winner}
                    playerCounts={this.state.playerCounts}
                    balance={this.state.balance}
                    players={this.state.players}
                    currentAccount={this.state.currentAccount}
                    play={this.play}
                    isClicked={this.state.isClicked}
                    DrawWinner={this.DrawWinner}
                    refund={this.refund}
                    isShowButton={this.state.isShowButton}
                />
            </div>
        );
    }
}

export default App;