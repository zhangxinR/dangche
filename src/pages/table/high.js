import React,{ Component } from 'react';
import {
    Card,
    Table,
    Modal,
    Badge,
    message
} from 'antd';
import axios from '../../axios/index';

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
                dataIndex:'id',
                width:60
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    if(sex===1){
                        return '女'
                    }else{
                        return '男'
                    }
                },
                width:80
            },
            {
                title:'年龄',
                dataIndex:'age',
                width:80
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
                },
                width:80
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
                },
                width:120
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:80
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200
            },
            {
                title:'早起时间',
                dataIndex:'time',
                width:120
            },
        ]
        const columns2 = [
            {
                title:'id',
                dataIndex:'id',
                width:60,
                fixed:true
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80,
                fixed:true
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    if(sex===1){
                        return '女'
                    }else{
                        return '男'
                    }
                },
            },
            {
                title:'年龄',
                dataIndex:'age',
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
                },
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
                },
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'地址',
                dataIndex:'address',
            },
            {
                title:'早起时间',
                dataIndex:'time',
                width:120,
                fixed:'right'
            },
        ]
        const columns3 = [
            {
                title:'id',
                dataIndex:'id',
            },
            {
                title:'用户名',
                dataIndex:'userName',
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    if(sex===1){
                        return '女'
                    }else{
                        return '男'
                    }
                },
            },
            {
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age-b.age
                },
                sortOrder:this.state.sortOrder
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
                },
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
                },
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'地址',
                dataIndex:'address',
            },
            {
                title:'早起时间',
                dataIndex:'time',
            },
        ]
        const columns4 = [
            {
                title:'id',
                dataIndex:'id',
            },
            {
                title:'用户名',
                dataIndex:'userName',
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    if(sex===1){
                        return '女'
                    }else{
                        return '男'
                    }
                },
            },
            {
                title:'年龄',
                dataIndex:'age'
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
                },
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    let config={
                        '1':<Badge status="success" text='成功'/>,
                        '2':<Badge status="error" text='错误'/>,
                        '3':<Badge status="default" text='默认'/>,
                        '4':<Badge status="processing" text='处理中'/>,
                        '5':<Badge status="warning" text='警告'/>,
                        '6':<Badge status="success" text='成功'/>,
                        '7':<Badge status="success" text='成功'/>,
                        '8':<Badge status="success" text='成功'/>,
                    }
                    return config[interest];
                },
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'地址',
                dataIndex:'address',
            },
            {
                title:'早起时间',
                dataIndex:'time',
            },
            {
                title:'删除',
                render:(text,item)=>{
                    return <a href="javascript:;" onClick={()=>this.handleDelete(item)}>删除</a>
                }
            }
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
                        //y轴滚动必须给每列加宽度，否则会造成表头与数据列宽不一致
                        scroll={{y:240}}
                    />
                </Card>
                <Card title='左侧固定' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        //x轴滚动，x的值为各列宽度的加和
                        scroll={{x:3340}}
                    />
                </Card>
                <Card title='表格排序' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title='操作按钮' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns4}
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
            url:'/table/high/list',
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

    handleChange=(pagination, filters, sorter)=>{
        // console.log(sorter);
        this.setState({
            sortOrder:sorter.order
        })
    }

    handleDelete=(item)=>{
        // console.log(item);
        Modal.confirm({
            title:'删除提示',
            content:'您确认要删除此条数据么？id:'+item.id,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }
}