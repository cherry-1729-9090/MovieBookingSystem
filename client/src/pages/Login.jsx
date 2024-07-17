import React from 'react';
import { Form, Button, Input, Checkbox } from 'antd';
import { Link, Navigate } from 'react-router-dom'; // import Navigate
import axios from 'axios';
const onFinish = (values) => {
    console.log('Success:', values);
    // should actually use the backend url
    axios.post('', {
        body: {
            email: values.email,
            password: values.password,
        }
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    }
    )

};


function Login() {
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
                onFinish={onFinish}
                autoComplete="off"
                layout='vertical'
            >
                <Form.Item>
                    <h1>Login</h1>
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
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
                <Form.Item>
                    <p>
                        Don't have an account?<Link to="/register">Register</Link>
                    </p>
                </Form.Item>
                <Form.Item>
                    <p>
                        Forgot your password?<Link to="/forgot-password">Reset Password</Link>
                    </p>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
