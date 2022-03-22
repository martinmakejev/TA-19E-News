import { Layout} from 'antd';
import Newsboxes from '../components/newsboxes'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../../styles/boxes.module.css'

const {Content } = Layout;

export default function MainLayout(){
    return(
        <div>
            <Layout className="layout" style={{backgroundColor: "white" }}>
                <Header/>
                    <Content>
                        <div className="site-layout-content">
                            <div>
                                <Newsboxes/>
                            </div>
                        </div>
                    </Content>
                <Footer/>
            </Layout>
        </div>
    )
    
}