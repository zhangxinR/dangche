import React,{ PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import './index.less';
import { switchMenu } from '../../redux/action';


const SubMenu = Menu.SubMenu;

class NavLeft extends PureComponent{

    state={
        currentKey:''
    }

    componentWillMount(){
        const menuTreeNode =this.renderMenu(MenuConfig);
        let currentKey=window.location.hash.replace(/#|\?.*$/g,'');
        this.setState({
            currentKey,
            menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map((item)=>{
            if(item.children){
                //利用递归实现层级结构
                return (
                    <SubMenu
                        key={ item.key }
                        title={ item.title }
                    >
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item
                    key={ item.key }
                    title={ item.title }
                >
                    <Link to={item.key}>
                        { item.title }
                    </Link>   
                </Menu.Item>
            )
        })
    }

    render(){
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt="logo"/>
                    <h1>Welcome</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={this.state.currentKey}
                    onSelect={(item)=>{console.log(item);this.props.navClick(item.item.props.title)}}
                    theme="dark"
                >
                    {
                        this.state.menuTreeNode
                    }
                </Menu>
            </div>
        );
    }

    handleClick=(item)=>{
        // console.log(item);
        this.setState({
            currentKey:item.key
        })
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        navClick(item){
            dispatch(
                switchMenu(item)
            )
        }
    }
}

export default connect(null,mapDispatchToProps)(NavLeft);