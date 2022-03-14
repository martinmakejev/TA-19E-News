import { Layout, Menu, Button, Space, Input, Row, Col, PageHeader } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default function MainLayout(){
    return(
        <div>
            <Layout className="layout" style={{backgroundColor:'white'}}>
                <Header style={{ backgroundColor: 'white'}}>
                    <PageHeader
                        ghost={false}
                        title="News"
                        //subTitle=""
                        extra={[
                            <Button onClick={() => { window.location.href = "/login-panel" }}>Logi sisse</Button>,
                            <Search placeholder="Otsi" style={{ width: 200 }} />
                        ]}
                    ></PageHeader>
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