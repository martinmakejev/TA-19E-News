import { Layout, Menu, Button, Space, Input, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default function MainLayout(){
    return(
        <div>
            <Layout className="layout" style={{backgroundColor:'white'}}>
                <Header style={{ backgroundColor: 'white'}}>
                    <Row>
                        <Col span={6}>
                            <div className="logo"/>
                        </Col>
                        <Col span={6}>
                            <Menu>
                            </Menu>
                        </Col>
                        <Col span={6}>
                            <Button onClick={()=>{window.location.href="/login-panel"}}>Log In</Button>
                        </Col>
                        <Col span={6}>
                            <Space direction="vertical">
                                <Search placeholder="Otsi" style={{ width: 200 }} />
                            </Space>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <div style={{height:300}}></div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
    
}