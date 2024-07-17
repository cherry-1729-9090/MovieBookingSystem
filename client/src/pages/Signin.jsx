import { Form, Input, Radio, Button } from 'antd';
import React from 'react';
const axios = require('axios');

function Signin() {
    function onFinish(values) {
        console.log('Success:', values);
        const { userName, email, role, password } = values;
        // should use the bakcend url
        axios.post('', {
            body: {
                userName,
                email,
                role,
                password
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        }
        )
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
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
                autoComplete="off"
                layout='vertical'
                onFinish={onFinish}
            >
                <Form.Item>
                    <h1>Signup</h1>
                </Form.Item>

                <Form.Item
                    label='UserName'
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input />
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
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Role"
                    name="role"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your role!',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={1}>Admin</Radio>
                        <Radio value={2}>User</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item>
                    <div>
                        Already have an account? <a href="/login">Login</a>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Signin;
