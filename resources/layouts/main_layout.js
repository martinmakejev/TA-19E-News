import { Layout, Button, Input, PageHeader } from 'antd';
import Newsboxes from '../components/newsboxes'

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default function MainLayout(){
    return(
        <div>
            <Layout className="layout" style={{backgroundColor: "white" }}>
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
                <Content>
                    <div className="site-layout-content">
                        <div>
                            <Newsboxes/>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
    
}