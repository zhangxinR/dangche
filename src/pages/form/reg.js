import React,{ Component } from 'react';
import {
    Form,
    Card,
    Input,
    Button,
    Icon,
    Checkbox,
    Radio,
    Select,
    Switch,
    DatePicker,
    TimePicker
} from 'antd';

const FormItem=Form.Item;
class Regs extends Component{
    render(){
        const { getFieldDecorator } =this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        return (
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'>
                        <FormItem label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder='请输入用户名' />
                                )
                            }
                        </FormItem>
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('userPassword',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:6,message:'密码最小6位'
                                        }
                                    ]
                                })(
                                    <Input placeholder='请输入密码' />
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

const RegisterForm=Form.create()(Regs);
export default RegisterForm;