import { Layout, Button, Input, PageHeader, Typography } from 'antd';

const { Header } = Layout;
const { Search } = Input;

export default function MainLayout() {
  const { Text } = Typography;

  return (
    <div>
      <Header style={{ backgroundColor: 'white' }}>
        <PageHeader
          ghost={false}
          title={<a href="/" style={{color: "black"}}>News</a>}
          extra={[
            <Text>Not signed in</Text>,
            <Button
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              Logi sisse
            </Button>,
            <Search placeholder="Otsi" style={{ width: 200 }} />,
          ]}
        ></PageHeader>
      </Header>
    </div>
  );
}
// export default function Component() {
//   const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }
