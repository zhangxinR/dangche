import React,{ Component } from 'react';
import {
    Card,
    Button,
    Modal
} from 'antd';
import './ui.less';

export default class Modals extends Component {

    constructor(props){
        super(props);
        this.state={
            showModal1:false,
            showModal2:false,
            showModal3:false,
            showModal4:false
        }
    }

    render(){
        return (
            <div>
                <Card title='基础模态框'>
                    <Button type='primary' onClick={()=>this.handleBasicModal('showModal1')}>Open</Button>
                    <Button type='primary' onClick={()=>this.handleBasicModal('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>this.handleBasicModal('showModal3')}>顶部20px弹框</Button>
                    <Button type='primary' onClick={()=>this.handleBasicModal('showModal4')}>水平垂直居中</Button>
                </Card>

                <Modal
                    title='React'
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>基础模态框</p>
                </Modal>
                <Modal
                    title='React'
                    visible={this.state.showModal2}
                    onCancel={()=>{
                        this.setState({
                            showModal2:false
                        })
                    }}
                    okText='确定'
                    cancelText='取消'
                >
                    <p>自定义页脚模态框</p>
                </Modal>
                <Modal
                    title='React'
                    visible={this.state.showModal3}
                    onCancel={()=>{
                        this.setState({
                            showModal3:false
                        })
                    }}
                    style={{
                        top:20
                    }}
                >
                    <p>顶部20px模态框</p>
                </Modal>
                <Modal
                    title='React'
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4:false
                        })
                    }}
                    centered
                >
                    <p>水平垂直居中模态框</p>
                </Modal>

                <Card title='信息确认框'>
                    <Button type='primary' onClick={()=>this.handleComfirm('confirm')}>Confirm</Button>
                    <Button type='primary' onClick={()=>this.handleComfirm('info')}>Info</Button>
                    <Button type='primary' onClick={()=>this.handleComfirm('success')}>Success</Button>
                    <Button type='primary' onClick={()=>this.handleComfirm('error')}>Error</Button>
                    <Button type='primary' onClick={()=>this.handleComfirm('warning')}>Warning</Button>
                </Card>
            </div>
        )
    }
    
    handleBasicModal=(type)=>{
        this.setState({
            [type]:true
        })
    }

    handleComfirm=(type)=>{
        Modal[type]({
            title:'确认',
            content:'信息确认框',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
}