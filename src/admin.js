import React,{ PureComponent } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';
import { Row,Col } from 'antd';

export default class Admin extends PureComponent{
    render(){
        return(
            <Row className="container">
                <Col span={3} className='nav-left'>
                    <NavLeft />
                </Col>
                <Col span={21} className='main'>
                    <Header/>
                    <Row className='content'>
                        Content
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}