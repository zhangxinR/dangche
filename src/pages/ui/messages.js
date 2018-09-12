import React,{ Component } from 'react';
import {
    Card,
    Button,
    message
} from 'antd';

export default class Messages extends Component{
    render(){
        return(
            <div>
                <Card title='全局提示框'>
                    <Button type='primary' onClick={()=>this.openMessage('success')}>success</Button>
                    <Button type='primary' onClick={()=>this.openMessage('info')}>info</Button>
                    <Button type='primary' onClick={()=>this.openMessage('warning')}>warning</Button>
                    <Button type='primary' onClick={()=>this.openMessage('error')}>error</Button>
                    <Button type='primary' onClick={()=>this.openMessage('loading')}>loading</Button>
                </Card>
            </div>
        )
    }

    openMessage=(type)=>{
        message[type]('发工资了！！！！')
    }
}