import React from 'react'
import { Form } from 'antd'
import { Input, Button } from 'antd'
import { Link, Navigate } from 'react-router-dom'

function Reset() {
    return (
        <div
            style={{
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
                layout='vertical'
            >
                <Form.Item>
                    <h1>Reset Password</h1>
                </Form.Item>

                <Form.Item
                    label="OTP"
                    htmlFor="otp"
                    name="otp"
                    className="d-block"
                    rules={[{ required: true, message: "OTP is required" }]}
                >
                    <Input
                        id="otp"
                        type="number"
                        placeholder="Enter your otp"
                    ></Input>
                </Form.Item>

                <Form.Item
                    label="New Password"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your new Password',
                            type: 'Password',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Confirm Password',
                            type: 'Password',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Reset Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Reset
