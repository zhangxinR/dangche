import React,{ Component } from 'react';
import {
    Card,
    Row,
    Col,
    Modal
} from 'antd';

export default class Gallery extends Component{
    constructor(props){
        super(props);
        this.state={
            picUrl:[],
            visible:false,
            currentImg:''
        }
    }

    componentWillMount(){
        const imgUrl=[];
        for(let i=0;i<5;i++){
            var img=[];
            for (let j=i*5+1;j<=(i+1)*5;j++){
                img.push(j+'.png')
            };
            imgUrl.push(img)
        }
        this.setState({
            picUrl:imgUrl
        })
    }

    render(){
        const Meta=Card.Meta;
        const imgList=this.state.picUrl.map((img)=>{
                            return img.map((item)=>(
                                <Card
                                    style={{marginBottom:10}}
                                    key={item}
                                    hoverable
                                    cover={<img alt="example" src={'/gallery/'+item} />}
                                    onClick={()=>this.handleShowModal(item)}
                                >
                                    <Meta
                                        title="Europe Street beat"
                                        description={"www.instagram.com"+item}
                                    />
                                </Card>
                        ))
                    })
        return (
            <div>
                <Row gutter={10}>
                    <Col md={5}>
                      { imgList[0] }
                    </Col>
                    <Col md={5}>
                      { imgList[1] }
                    </Col>
                    <Col md={5}>
                      { imgList[2] }
                    </Col>
                    <Col md={5}>
                      { imgList[3] }
                    </Col>
                    <Col md={4}>
                      { imgList[4] }
                    </Col>
                </Row>
                <Modal
                    visible={this.state.visible}
                    title='Europe Street beat'
                    onCancel={this.handleCancel}
                    style={{top:20}}
                >
                    <img 
                        src={'/gallery/'+this.state.currentImg} 
                        alt="example"
                        style={{maxWidth:'100%'}}
                    />
                </Modal>
            </div>
        )
    }

    handleShowModal=(pic)=>{
        this.setState({
            visible:true,
            currentImg:pic
        })
    }

    handleCancel=()=>{
        this.setState({
            visible:false,
            currentImg:''
        })
    }
}