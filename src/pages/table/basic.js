import React,{ Component } from 'react';
import {
    Card,
    Table,
    Modal,
    Button,
    message
} from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';

export default class BasicTable extends Component{
    
    state={
        dataSource2:[ ]
    }

    params={
        page:1
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
        dataSource.map((item,index)=>{
            return item.key=index
        })
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
        const rowCheckSelection={
            type:'checkbox',
            onChange:(selectedRowKeys, selectedRows)=>{
                // console.log(selectedRowKeys,selectedRows)
                let ids=[];
                selectedRows.map((item,index)=>{
                    ids.push(item.id)
                })
                this.setState({
                    selectedId:ids,
                    selectedRows
                })
            }
        }
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
                <Card title='动态数据渲染报告表格-Mock' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title='Mock-单选' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        rowSelection={
                            rowSelection
                        }
                        onRow={(record,index) => {
                            return {
                              onClick: () => {
                                  this.onRowClick(record,index)
                              },       
                            };
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title='Mock-复选' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                    <div>
                        <Button type='danger' onClick={this.handleDeleteSelected}>删除</Button>
                    </div>
                </Card>
                <Card title='Mock-分页表格' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
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
                dataSource2:dataS,
                pagination:Utils.pagination(res,(current)=>{
                    this.params.page=current;
                    this.request();
                })
            });
        })
    }

    onRowClick=(record,index)=>{
        // console.log(record,index);
        let selectKey=[index];
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName},用户爱好：${record.interest}`
        })
        this.setState({
            selectRowKeys:selectKey,
            selectItem:record
        })
    }

    handleDeleteSelected=()=>{
        Modal.confirm({
            title:'删除确认',
            content:`是否确认删除：${this.state.selectedRows.map((item)=>{
                return item.userName
            })}`,
            onOk:()=>{
                message.success('删除成功');
            }
        })
    }
}