import React from 'react';
import { Card, Col, Row, Avatar, Typography, Space, Carousel, Layout } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import homecover from '../assets/homecover.png';
import olxlogo from '../assets/olxlogo.png';
import { Grid } from 'antd';
import car from '../assets/car.jpg';
const { Title, Text } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;
const categories = [
    { name: 'Cars', img: car },
    { name: 'Mobile Phones', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80' },
    { name: 'Camera', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80' },
    { name: 'Bikes', img: 'https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Buisness and Industrial', img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Services', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Jobs', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Animals', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80' },
    { name: 'Kids', img: 'https://plus.unsplash.com/premium_photo-1687757692803-80a3f3ca5581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' },
    { name: 'Furniture and Home Decor', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80' },
    { name: 'Books', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Sports and Hobbies', img: 'https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' },
    { name: 'Proberties for Sale', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80' },
    { name: 'Houses', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },

];

const data = [
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },
    { title: 'Samsung S22 Ultra', description: 'Some description', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80', price: '$1000', location: 'New York', time: '1 week ago' },

];

const HomePage = () => {
    const screens = useBreakpoint();

    return (
        <div style={{
            paddingLeft: screens.md ? '6%' : '0',
            paddingRight: screens.md ? '6%' : '0'
        }}>
            <Carousel autoplay style={{ height: "auto" }}>
                {/* <div> */}
                <img src={homecover} alt="Banner" style={{ width: 'auto', height: "150px", minHeight: "150px", objectFit: 'contain' }} />
                {/* </div> */}
                {/* <div> */}
                <img src={homecover} alt="Banner" style={{ width: 'auto', height: "150px", minHeight: "150px", objectFit: 'contain' }} />
                {/* </div> */}
            </Carousel>

            <Content style={{ padding: '0 20px' }}>
                <Title level={2} style={{ textAlign: 'left', margin: '20px 0' }}>All Categories</Title>

                <Row gutter={16} justify="left" >
                    {categories.map((cat, index) => (
                        <Col key={index} xs={8} sm={6} md={4} lg={3} style={{
                            textAlign: 'center'
                        }}>
                            <Space direction="vertical" style={{ width: '95px' }}>
                                <Avatar src={cat.img} size={90} />
                                <Text >{cat.name}</Text>
                            </Space>
                        </Col>
                    ))}
                </Row>

                <Row gutter={16} style={{ marginTop: "20px" }}>
                    {data.map((item, index) => (
                        <Col span={6} sm={12} xs={24} md={6} lg={6} key={index} style={{ marginBottom: "25px" }}>
                            <Card
                                cover={<img alt={item.title} src={item.img} style={{ height: "170px", objectFit: "cover" }} />}
                            >
                                <Row justify="space-between">
                                    <Title level={3} style={{ margin: 0 }}>{item.price}</Title>
                                    <HeartOutlined style={{ fontSize: '24px' }} />
                                </Row>
                                <Title level={4} style={{ margin: 0 }}>{item.title}</Title>
                                <Text style={{ display: "block", marginBottom: "3px", marginTop: "10px" }}>{item.location}</Text>
                                <Text type="secondary">{item.time}</Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Content>
        </div >
    );
};

export default HomePage;
