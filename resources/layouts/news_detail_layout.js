import Image from "next/image"
import styles from '../../styles/boxes.module.css'
import { Layout} from 'antd';
import Footer from '../components/footer'
import Header from '../components/header'

const {Content } = Layout;


export default function DetailLayout(){
    return(
        <div>
            <Layout className="layout" style={{backgroundColor: "white" }}>
                <Header/>
                    <Content className={styles.container}>
                        <div className="site-layout-content">
                            <div>
                                <h1>Kool jääb esmaspäeval ära</h1>
                                <Image
                                    src={"/../public/placeholder.jpg"}
                                    layout='responsive'
                                    width={100}
                                    height={50}/>
                                <div style={{paddingTop: '20px'}}>
                                    <p>Kallid õpilased! Ülitore uudis! Kool jääb esmaspäeval ära, kuna õpilased on väsinud ja vajavad natukene puhkust.
                                        Nautige ning näeme teisipäeval!
                                        PS! Kui arvate, et see on nali, siis jah, see on nali. Esmaspäeval toimub kool nagu tavaliselt :)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Content>
                <Footer/>
            </Layout>
        </div>
    )
}