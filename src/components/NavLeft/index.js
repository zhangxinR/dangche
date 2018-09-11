import React,{ PureComponent } from 'react';
import { Link } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends PureComponent{

    componentWillMount(){
        const menuTreeNode =this.renderMenu(MenuConfig);

        this.setState({
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
                    <h1>Imooc MS</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {
                        this.state.menuTreeNode
                    }
                </Menu>
            </div>
        );
    }
}