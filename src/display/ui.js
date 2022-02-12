import React from 'react'
import {Card, Icon, Image, Statistic} from 'semantic-ui-react'

const CardExampleCard = (props) => (
    <Card>
        <Image src='/images/logo.jpg' wrapped ui={false}/>
        <Card.Content>
            <Card.Header>HGNUACM 福利彩票</Card.Header>
            <Card.Meta>
                <p>管理员地址：{props.manager}</p>
                <p>当前地址：{props.currentAccount}</p>
            </Card.Meta>
            <Card.Description>
                每晚八点准时开奖，不见不散！
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
                {props.playerCounts}人参与
            </a>
        </Card.Content>
        <Card.Content extra>
            <Statistic color='red'>
                <Statistic.Value>{props.balance}ETH</Statistic.Value>
                <Statistic.Label>奖金池</Statistic.Label>
            </Statistic>
        </Card.Content>
        <Card.Content extra>
            <Statistic color='blue'>
                <Statistic.Value>第{props.round}期</Statistic.Value>
                <a href='#'>点我查看交易历史</a>
            </Statistic>
        </Card.Content>
    </Card>
)

export default CardExampleCard