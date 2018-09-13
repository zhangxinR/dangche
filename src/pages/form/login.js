import React,{ Component } from 'react';
import {
    Form,
    Card,
    Input,
    Button,
    message,
    Icon,
    Checkbox
} from 'antd';

const FormItem=Form.Item;
class Logins extends Component{
    render(){
        const { getFieldDecorator } =this.props.form;
        return (
            <div>
                <Card title='登录行内表单'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder='请输入用户名' />
                        </FormItem>
                        <FormItem>
                            <Input placeholder='请输入密码' />
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='登录水平表单'>
                    <Form style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    // initialValue:'Jack',
                                    rules:[
                                        { 
                                            required: true, message: '请输入用户名!' 
                                        },{
                                            pattern:/^[a-zA-Z0-9]+$/g,message:'用户名类型不正确'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type='user'/>} placeholder='请输入用户名'/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPassword',{
                                    // initialValue:'123456',
                                    rules:[
                                        { 
                                            required: true, message: '请输入密码!' 
                                        },
                                        {
                                            min:6,max:8,message:'长度不在范围内'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type='lock'/>} type='password' placeholder='请输入密码'/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    // 由于Checkbox的的值属性为checked状态，需要用valuePropName改变值得属性，而不是默认的value
                                    valuePropName:'checked',
                                    initialValue:true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button block type='primary' onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }

    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log(values);
                message.success(`${userInfo.userName},恭喜你，当前密码为${userInfo.userPassword}`)
            }else{
                console.log(err)
            }
        })
    }
}

const WrappedNormalLoginForm = Form.create()(Logins);
export default WrappedNormalLoginForm;