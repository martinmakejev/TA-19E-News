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
  return (
    <div className={styles.container}>

        <MainLayout/>
    </div>
  );
}
