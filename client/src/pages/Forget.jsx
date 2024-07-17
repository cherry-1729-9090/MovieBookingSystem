import { Form } from 'antd'
import React from 'react'
import { Input, Button } from 'antd'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

const onFinish = (values)=>{
    console.log(values);
    axios.post('http://localhost:5000/forgetPasswd', {
        body: {
            email: values.email
        }
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    }
    )   
} 

function Forget() {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 400,
                    width: '100vw',
                    padding: '20px',
                    background: '#fff',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px'
                }}
                initialValues={{
                    remember: true,
                }}
                layout='vertical'
            >
                <Form.Item>
                    <h1>Forget Password</h1>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email address!',
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Forget
