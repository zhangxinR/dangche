import React,{Component} from 'react';
import {
    Card,
    Spin,
    Icon,
    Alert
} from 'antd'

export default class Loadings extends Component{

    render(){
        const icon=<Icon type='loading' style={{ fontSize:24 }}/>
        return(
            <div>
                <Card title='Spin用法'>
                    <Spin size='small' />
                    <Spin style={{ margin:'0 10px' }}/>
                    <Spin size='large' />
                    <Spin indicator={icon} style={{ margin:'0 10px' }}/>
                </Card>
                <Card title='内容遮罩'>
                    <Alert
                        message='React'
                        description='welcome'
                        type='info'
                    />
                    <Spin>
                        <Alert
                            message='React'
                            description='welcome'
                            type='info'
                        />
                    </Spin>
                    <Spin tip='加载中...'>
                        <Alert
                            message='React'
                            description='welcome'
                            type='info'
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message='React'
                            description='welcome'
                            type='info'
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}