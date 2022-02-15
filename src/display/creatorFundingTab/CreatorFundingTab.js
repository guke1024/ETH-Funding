import React, {Component} from 'react';
import {factoryInstance, newFundingInstance} from '../../eth/instance'

class CreatorFundingTab extends Component {
    state = {
        creatorFundings: [],
    }

    async UNSAFE_componentWillMount() {
        let creatorFundings = await factoryInstance.methods.getCreatorFundings().call()
        creatorFundings.map(async function (fundingAddress) {
            let fundingInstance = newFundingInstance()
            fundingInstance.options.address = fundingAddress
            let manager = await fundingInstance.methods.manager().call()
            let projectName = await fundingInstance.methods.projectName().call()
            let targetMoney = await fundingInstance.methods.targetMoney().call()
            let supportMoney = await fundingInstance.methods.supportMoney().call()
            let leftTime = await fundingInstance.methods.getLeftTime().call()

            let detail = {manager, projectName, targetMoney, supportMoney, leftTime}
            console.table(detail)

        })
        this.setState({
            creatorFundings
        })
    }

    render() {
        return (
            <p>{this.state.creatorFundings}</p>
        )
    }
}

export default CreatorFundingTab