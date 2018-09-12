import React,{ Component } from 'react';
import { 
    Tabs,
    Card,
    Icon,
    message
} from 'antd';

export default class TabComponent extends Component{

    constructor(props){
        super(props);
        this.newTabIndex=0
    }

    componentWillMount(){
        const panes=[
            {
                title:'Tab 1',
                content:'Content of Tab newTab',
                key:'1'
            },
            {
                title:'Tab 2',
                content:'Content of Tab newTab',
                key:'2'
            },
            {
                title:'Tab 3',
                content:'Content of Tab newTab',
                key:'3'
            },
        ];
        this.setState({
            panes,
            activeKey:panes[0].key
        })
    }

    render(){
        const TabPane=Tabs.TabPane;
        return (
            <div>
                <Card title='Tab标签页'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab带图标的标签页'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type='android' />Tab1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type='android' />Tab2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type='android' />Tab3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab可关闭卡片式标签页'>
                    <Tabs 
                        defaultActiveKey="1" 
                        type='editable-card'
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((item)=>{
                                return (
                                    <TabPane
                                        tab={item.title}
                                        key={item.key}
                                    >
                                        {item.content}
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
    handleCallback=(key)=>{
        message.info('您选择了标签'+key);
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    } 

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
}