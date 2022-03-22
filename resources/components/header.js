import { Layout, Button, Input, PageHeader } from 'antd';

const { Header } = Layout;
const { Search } = Input;

export default function MainLayout(){
    return(
        <div>
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
        </div>
    )
    
}