import React,{ Component } from 'react';
import {
    Card,
    Table,
    Modal
} from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';

export default class HighTables extends Component{
    state={
        dataSource2:[ ]
    }

    params={
        page:1
    }

    componentDidMount(){
        this.request();
    }

    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    if(sex==1){
                        return '女'
                    }else{
                        return '男'
                    }
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config={
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者',
                    }
                    return config[state];
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    let config={
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'踢足球',
                        '4':'跑步',
                        '5':'爬山',
                        '6':'骑行',
                        '7':'桌球',
                        '8':'麦霸',
                    }
                    return config[interest];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
            {
                title:'早起时间',
                dataIndex:'time'
            },
        ]
        const rowSelection={
            type:'radio',
            selectedRowKeys:this.state.selectRowKeys
        }
        return (
            <div>
                <Card title='头部固定' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title='左侧固定' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }

    //动态获取tablelist数据
    request=()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            // console.log(res);
            let dataS=res.result;
            dataS.map((item,index)=>{
                item.key=index
            });
            this.setState({
                dataSource2:dataS
            });
        })
    }
}