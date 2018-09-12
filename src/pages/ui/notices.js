import React,{ Component } from 'react';
import {
    Card,
    Button,
    notification
} from 'antd';
import './ui.less';

export default class Notices extends Component{
    render(){
        return(
            <div>
                <Card title='通知提醒框'>
                    <Button type='primary' onClick={()=>this.openNotification('success')}>success</Button>
                    <Button type='primary' onClick={()=>this.openNotification('info')}>info</Button>
                    <Button type='primary' onClick={()=>this.openNotification('warning')}>warning</Button>
                    <Button type='primary' onClick={()=>this.openNotification('error')}>error</Button>
                </Card>
                <Card title='通知提醒框-方向控制'>
                    <Button type='primary' onClick={()=>this.openNotification('success','topLeft')}>success-topLeft</Button>
                    <Button type='primary' onClick={()=>this.openNotification('info','topRight')}>info-topRight</Button>
                    <Button type='primary' onClick={()=>this.openNotification('warning','bottomLeft')}>warning-bottomLeft</Button>
                    <Button type='primary' onClick={()=>this.openNotification('error','bottomRight')}>error-bottomRight</Button>
                </Card>
            </div>
        )
    }

    openNotification(type,placement){
        if(placement){
            notification.config({
                placement
            })
        }
        notification[type]({
            message: '通知提醒框',
            description: '该下班了！！！！' ,
            placement
        })
    }
}