import React,{ Component } from 'react';
import {
    Card,
    Row,
    Col
} from 'antd';

export default class Gallery extends Component{
    constructor(props){
        super(props);
        this.state={
            picUrl:[]
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
                                    hoverable
                                    cover={<img alt="example" src={'/gallery/'+item} />}
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
                <Row>
                    <Col md={4}>
                      { imgList[0] }
                    </Col>
                    <Col md={4}>
                      { imgList[1] }
                    </Col>
                    <Col md={4}>
                      { imgList[2] }
                    </Col>
                    <Col md={4}>
                      { imgList[3] }
                    </Col>
                    <Col md={4}>
                      { imgList[4] }
                    </Col>
                </Row>
            </div>
        )
    }
}