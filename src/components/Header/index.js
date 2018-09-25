import React,{ PureComponent } from 'react';
import { Row,Col } from 'antd';
import { connect } from 'react-redux';
//实现格式化
import Utils from '../../utils/utils';
import './index.less';
import axios from '../../axios';

class Header extends PureComponent{
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillMount(){
        setInterval(()=>{
            let systemTime=Utils.formateDate(new Date().getTime());
            this.setState({
                systemTime
            })
        },1000);
        this.getWeatherApiData();
    };

    getWeatherApiData(){
        let city=encodeURIComponent('北京');
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            let data=res.results[0].weather_data[0];
            this.setState({
                dayPicture:data.dayPictureUrl,
                weather:data.weather
            })
        })
    }

    render(){
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎，河畔一角</span>
                        <a href="javascript:;">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span='4' className='breadcrumb-title'>
                        {this.props.menuName}
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{ this.state.systemTime }</span>
                        <span className='weather-img'>
                            <img src={this.state.dayPicture} alt={this.state.weather}/>
                        </span>
                        <span className='weather-detail'>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        menuName:state.menuName
    }
}

export default connect(mapStateToProps,null)(Header);