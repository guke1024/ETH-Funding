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
        let accounts = await web3.eth.getAccounts()
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
            currentAccount: accounts[0],
        })
    }

    render() {
        return (
            <div>
                <CardExampleCard/>
                <p>hello world</p>
                <p>manager:{this.state.manager}</p>
                <p>round:{this.state.round}</p>
                <p>winner:{this.state.winner}</p>
                <p>playerCounts:{this.state.playerCounts}</p>
                <p>balance:{this.state.balance}</p>
                <p>players:{this.state.players}</p>
                <p>currentAccount:{this.state.currentAccount}</p>
            </div>
        );
    }
}

export default App;
