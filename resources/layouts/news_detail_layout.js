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
                                <h1>Auctor urna nunc id cursus</h1>
                                <Image
                                    alt='placeholder'
                                    src={"/../public/placeholder.jpg"}
                                    layout='responsive'
                                    width={100}
                                    height={50}/>
                                <div style={{paddingTop: '20px'}}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Sed turpis tincidunt id aliquet risus. Pellentesque habitant morbi tristique senectus et netus et malesuada. 
                                        Nibh nisl condimentum id venenatis a. Tempus egestas sed sed risus pretium quam vulputate dignissim. 
                                        In vitae turpis massa sed elementum tempus egestas. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. 
                                        Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Auctor urna nunc id cursus. Libero volutpat sed cras ornare arcu dui. 
                                        Sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam eleifend mi in. Netus et malesuada fames ac turpis. 
                                        Et netus et malesuada fames ac turpis. Ante in nibh mauris cursus mattis molestie a iaculis at. Non sodales neque sodales ut etiam sit amet nisl. 
                                        Gravida neque convallis a cras semper auctor. Viverra nibh cras pulvinar mattis nunc. Natoque penatibus et magnis dis parturient montes. 
                                        Commodo odio aenean sed adipiscing diam.

                                        Morbi tristique senectus et netus et malesuada fames ac turpis. Purus sit amet luctus venenatis. 
                                        Tempus urna et pharetra pharetra massa massa ultricies mi quis. Malesuada nunc vel risus commodo viverra maecenas accumsan. 
                                        Eget nunc lobortis mattis aliquam faucibus purus in. In dictum non consectetur a erat. Viverra orci sagittis eu volutpat. 
                                        Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Nunc mattis enim ut tellus elementum sagittis vitae et. 
                                        Volutpat consequat mauris nunc congue. Morbi enim nunc faucibus a. Diam volutpat commodo sed egestas egestas fringilla. 
                                        Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Cursus metus aliquam eleifend mi in nulla. 
                                        Sit amet aliquam id diam maecenas ultricies mi eget. Consequat semper viverra nam libero. Ante in nibh mauris cursus mattis molestie a iaculis. 
                                        Etiam erat velit scelerisque in dictum non consectetur a erat.

                                        In hendrerit gravida rutrum quisque non tellus. Tellus at urna condimentum mattis pellentesque. Tortor posuere ac ut consequat semper viverra nam. 
                                        Morbi tristique senectus et netus et malesuada. Nunc aliquet bibendum enim facilisis gravida. In nibh mauris cursus mattis. Sodales ut etiam sit amet. 
                                        Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Massa tincidunt dui ut ornare lectus sit. 
                                        Ullamcorper eget nulla facilisi etiam. Magna ac placerat vestibulum lectus. Libero volutpat sed cras ornare arcu dui vivamus.
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