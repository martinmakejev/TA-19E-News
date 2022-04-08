import { Layout, Button, Input, PageHeader, Typography } from 'antd';
import { useSession, signIn, signOut } from "next-auth/react"

const { Header } = Layout;
const { Search } = Input;

export default function MainLayout(){
    const { data: session } = useSession()
    const { Text } = Typography;


    if(session) {
    return(
        <div>
            <Header style={{ backgroundColor: 'white'}}>
                <PageHeader
                    ghost={false}
                    title="News"
                    //subTitle=""
                    extra={[
                        <Text>Signed in as {session.user.email}</Text>,
                        <Button onClick={() => signOut()}>Sign out</Button>,
                        <Search placeholder="Otsi" style={{ width: 200 }} />
                    ]}
                ></PageHeader>
            </Header>
        </div>
    )}
    return(
        <div>
            <Header style={{ backgroundColor: 'white'}}>
                <PageHeader
                    ghost={false}
                    title="News"
                    extra={[
                        <Text>Not signed in</Text>,
                        <Button onClick={() => signIn()}>Sign in</Button>,
                        <Search placeholder="Otsi" style={{ width: 200 }} />
                    ]}
                ></PageHeader>
            </Header>
        </div>
    )

} 
