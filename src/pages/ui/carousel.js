import React,{ Component } from 'react';
import {
    Card,
    Carousel
} from 'antd';
import './ui.less';

export default class Carousels extends Component{
    render(){
        return(
            <div>
                <Card title='文字轮播图'>
                    <Carousel 
                        effect="fade" 
                        autoplay
                    >
                        <div><h3>Welcome Learn Antd1</h3></div>
                        <div><h3>Welcome Learn Antd2</h3></div>
                        <div><h3>Welcome Learn Antd3</h3></div>
                        <div><h3>Welcome Learn Antd4</h3></div>
                    </Carousel>
                </Card>
                <Card title='图片轮播图'>
                    <Carousel 
                        autoplay
                    >
                        <div><img src="/gallery/1.png" alt="1"/></div>
                        <div><img src="/gallery/2.png" alt="2"/></div>
                        <div><img src="/gallery/3.png" alt="3"/></div>
                        <div><img src="/gallery/4.png" alt="4"/></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
} 