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
    TimePicker,
    InputNumber
} from 'antd';
import moment from 'moment';

const FormItem=Form.Item;
class Regs extends Component{
    render(){
        const { getFieldDecorator } =this.props.form;
        const RadioGroup=Radio.Group;
        const Option=Select.Option;
        const { TextArea } = Input;
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
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:1
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={0}>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:18
                                })(
                                   <InputNumber min={1} max={10} ></InputNumber>
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2'
                                })(
                                   <Select>
                                       <Option value='1'>咸鱼一条</Option>
                                       <Option value='2'>风华浪子</Option>
                                       <Option value='3'>北大才子</Option>
                                       <Option value='4'>百度FE</Option>
                                       <Option value='5'>创业者</Option>
                                   </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('interesting',{
                                    initialValue:'2'
                                })(
                                   <Select mode="multiple">
                                       <Option value='1'>游泳</Option>
                                       <Option value='2'>打篮球</Option>
                                       <Option value='3'>踢足球</Option>
                                       <Option value='4'>跑步</Option>
                                       <Option value='5'>爬山</Option>
                                       <Option value='6'>骑行</Option>
                                       <Option value='7'>桌球</Option>
                                       <Option value='8'>麦霸</Option>
                                   </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='是否已婚' {...formItemLayout}>
                            {
                                getFieldDecorator('isMarry',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                   <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label='生日' {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue:moment('2018-9-14 12:00:55')
                                })(
                                   <DatePicker 
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                   />
                                )
                            }
                        </FormItem>
                        <FormItem label='联系地址' {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue:'北京潘家园美景东方小区'
                                })(
                                   <TextArea row={4} />
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