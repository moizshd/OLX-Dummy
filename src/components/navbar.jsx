import React from 'react';
import { Menu, Button, Input, Dropdown, Select, Row, Col } from 'antd';
import { SearchOutlined, PlusCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import olxlogo from '../assets/olxlogo.png';
import './navbar.css';
import { Grid } from 'antd';
const { useBreakpoint } = Grid;
const { Option } = Select;

const NavBar = () => {
    const screens = useBreakpoint();

    const locations = ['Location 1', 'Location 2', 'Location 3']; // Add your locations here

    const userMenu = (
        <Menu>
            <Menu.Item key="1">
                <Link to="/login" style={{ textDecoration: 'underline', fontWeight: "bold" }}>Login</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Button type="primary" icon={<PlusCircleOutlined />}>Sell</Button>
            </Menu.Item>
        </Menu>
    );

    return (
        <Row
            justify="space-between"
            align="middle"
            style={{
                backgroundColor: '#F7F8F8',
                padding: '10px',
                paddingLeft: screens.md ? '6%' : '0',
                paddingRight: screens.md ? '6%' : '0'
            }}
        >
            <Col xs={3} sm={3} md={3} lg={3} xl={2} align="left">
                <img src={olxlogo} alt="Logo" style={{ width: '70px' }} /> {/* Add your logo */}
            </Col>

            <Col xs={5} sm={5} md={6} lg={5} xl={3}>
                <Select
                    showSearch
                    size='large'
                    style={{ width: '100%', marginRight: '20px' }}
                    className="custom-select"
                    placeholder="Select a location"
                    optionFilterProp="children"
                >
                    {locations.map(location => <Option key={location}>{location}</Option>)}
                </Select>
            </Col>

            <Col xs={12} sm={12} md={7} lg={9} xl={10} >
                <Input
                    placeholder="Find Cars, mobile phones and more..."
                    style={{
                        marginRight: '20px', flex: '1', height: '45px', border: '2px solid black'
                    }}
                    suffix={< SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
                />
            </Col>

            <Col xs={0} sm={0} md={{ span: 3, order: 0 }} lg={2} xl={2} align="center">
                <Link to="/login" style={{ textDecoration: 'underline', fontWeight: "bold" }}>Login</Link>
            </Col>

            <Col xs={0} sm={0} md={{ span: 3, order: 0 }} lg={2} xl={2} align="center">
                <Button type="primary" icon={<PlusCircleOutlined />}>Sell</Button>
            </Col>

            <Col xs={1} sm={1} md={0} lg={0} xl={0} align="right">
                <Dropdown overlay={userMenu} placement="bottomRight">
                    <Button icon={<MenuOutlined />} />
                </Dropdown>
            </Col>
        </Row>
    );
};

export default NavBar;
