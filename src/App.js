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
        }
    }

    async componentWillMount() {
        await window.ethereum.enable()
        let currentAccount = await window.ethereum.selectedAddress
        let manager = await lotteryInstance.methods.manager().call()
        let round = await lotteryInstance.methods.round().call()
        let winner = await lotteryInstance.methods.winner().call()
        let playerCounts = await lotteryInstance.methods.getPlayersCount().call()
        let balanceWei = await lotteryInstance.methods.getBalance().call()
        let balance = web3.utils.fromWei(balanceWei, 'ether')
        let players = await lotteryInstance.methods.getPlayers().call()
        this.setState({
            manager,
            round,
            winner,
            playerCounts,
            balance,
            players,
            currentAccount,
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
                />
            </div>
        );
    }
}

export default App;