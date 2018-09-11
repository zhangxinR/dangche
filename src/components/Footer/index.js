import React,{ PureComponent } from 'react';
import './index.less'

export default class Footer extends PureComponent{
    render(){
        return (
            <div className='footer'>
                版权所有：xxx （推荐使用谷歌浏览器，可以获得更佳操作页面体验）
            </div>
        );
    }
}