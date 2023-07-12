import React from 'react';
import { Modal, Form, Input, Button, Typography, message } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import olxlogo from '../assets/olxlogo.png';
const { Title } = Typography;

const Register = () => {
    const { user, setUser } = useContext(UserContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useLayoutEffect(() => {
        setIsModalVisible(true);
    }, []);

    const onFinish = (values) => {
        if (values.email && values.password) {
            setUser({
                email: values.email,
                password: values.password
            });
            message.success('Registered successfully');
            navigate('/login');
        } else {
            message.error('Please fill in all the fields');
        }
    };

    const disableButton = () => {
        const values = form.getFieldsValue();
        return !(values.email && values.password);
    }

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
                Enter your Email and Password to register
            </Title>
            <Form
                form={form}
                name="register"
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
            <p style={{ textAlign: 'center', color: 'grey', fontSize: '14px' }}>
                We won't reveal your email to anyone else nor use it to send you spam.
            </p>
        </Modal>
    );
};

export default Register;
