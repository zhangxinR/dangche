import React,{ Component } from 'react';
import {
    Card,
    Table
} from 'antd';
import axios from '../../axios/index';

export default class BasicTable extends Component{
    
    state={
        dataSource2:[ ]
    }

    componentDidMount(){
        const dataSource = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-1-1',
                address:'北京市海淀区',
                time:'09:00'
            },
            {
                id:'1',
                userName:'Tom',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-1-1',
                address:'北京市海淀区',
                time:'09:00'
            },
            {
                id:'2',
                userName:'Lily',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-1-1',
                address:'北京市海淀区',
                time:'09:00'
            },
        ];
        this.setState({
            dataSource
        });
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
                dataIndex:'state'
            },
            {
                title:'爱好',
                dataIndex:'interest'
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
        return (
            <div>
                <Card title='基础表格'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title='动态数据渲染报告表格' style={{margin:'10px 0'}}>
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
                    page:1
                }
            }
        }).then((res)=>{
            // console.log(res);
            this.setState({
                dataSource2:res.result
            })
        })
    }

}