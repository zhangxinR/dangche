import React,{ Component } from 'react';
import { Card,Button,Icon,Radio } from 'antd';
import './ui.less';

export default class Buttons extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            size:'small'
        }
    }

    render() {

        const ButtonGroup=Button.Group;
        const RadioGroup=Radio.Group;

        return (
            <div>
                <Card
                    title='基础按钮'
                >
                    <Button type='primary'>主按钮</Button>
                    <Button>次按钮</Button>
                    <Button type='dashed'>虚线按钮</Button>
                    <Button type='danger'>危险按钮</Button>
                    <Button disabled>禁用按钮</Button>
                </Card>
                <Card
                    title='图形按钮'
                >
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button icon='search' shape='circle'></Button>
                    <Button icon='search' type='primary'>搜索</Button>
                    <Button icon='download' type='primary'>下载</Button>
                </Card>
                <Card
                    title='loading按钮'
                >
                    <Button type='primary' loading={this.state.loading}>确定</Button>
                    <Button type='primary' shape='circle' loading={this.state.loading}></Button>
                    <Button loading={this.state.loading} onClick={this.handleStartLoading}>点击加载</Button>
                    <Button shape='circle' loading={this.state.loading}></Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card
                    title='按钮组'
                >
                    <ButtonGroup>
                        <Button 
                            type='primary'
                            style={{margin:0}}
                        >
                            <Icon type='left'></Icon>
                            返回
                        </Button>
                        <Button 
                            type='primary'
                            style={{margin:0}}
                        >
                            前进
                            <Icon type='right'></Icon>                            
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card
                    title='按钮尺寸'
                >
                    <RadioGroup onChange={this.handleChangeSize} value={this.state.size}>
                        <Radio value='small'>小</Radio>
                        <Radio value=''>中</Radio>
                        <Radio value='large'>大</Radio>
                    </RadioGroup>
                    <Button type='primary' size={this.state.size}>主按钮</Button>
                    <Button size={this.state.size}>次按钮</Button>
                    <Button type='dashed' size={this.state.size}>虚线按钮</Button>
                    <Button type='danger' size={this.state.size}>危险按钮</Button>
                    <Button disabled size={this.state.size}>禁用按钮</Button>
                </Card>
            </div>
        )
    }

    handleCloseLoading = ()=>{
        this.setState({
            loading:false
        })
    }

    handleStartLoading = () => {
        this.setState({
            loading:true
        })
    }

    handleChangeSize = (e) => {
        this.setState({
            size:e.target.value
        })
    }
}