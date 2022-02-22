import { getLocationOrigin } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Login from './login-panel'
import { handler } from "./api/v1/login"
import Navbar from '../resources/components/main_layout'
import MainLayout from '../resources/components/main_layout'



export default function Home() {
  //const [content, setContent] = useState([]);
  const content = [{title: "Cat1", src:"pages/placeholder.jpeg"},{title: "Cat2", src:"placeholder.jpg"},{title: "Cat3", src:"placeholder.jpg"}]

  /*useEffect(function() {
    fetch("").then(res => res.json()).then(data => setContent(data))
  }, []) */

  return (
    <div className={styles.container}>
        <MainLayout/>
    </div>
    
  )
  
}
