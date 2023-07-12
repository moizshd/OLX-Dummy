import React from 'react';
import { Modal, Form, Input, Button, Typography, message } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../context/User';
import { useLayoutEffect, useState } from 'react';
import olxlogo from '../assets/olxlogo.png';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const Login = () => {
    const { user } = useContext(UserContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    useLayoutEffect(() => {
        setIsModalVisible(true);
    }, []);
    const onFinish = (values) => {
        if (values.email === user.email && values.password === user.password) {
            message.success('Logged in successfully');
            navigate('/home');
        } else {
            message.error('Invalid email or password');
        }
    };

    return (
        <Modal
            centered
            visible={isModalVisible}
            footer={null}
            closable={false}
            width={400}
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={olxlogo} alt="Logo" style={{ width: '70px', marginBottom: '0px' }} />
            </div>
            <Title level={4} style={{ textAlign: 'center', marginBottom: '20px' }}>
                Enter your Email and Password
            </Title>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >

                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input placeholder="Email" style={{ height: '50px' }} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" style={{ height: '50px' }} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ height: '50px' }} block >
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <p style={{ textAlign: 'center', color: 'grey', fontSize: '14px' }}>
                We won't reveal your email to anyone else nor use it to send you spam.
            </p>
        </Modal>
    );
};

export default Login;
