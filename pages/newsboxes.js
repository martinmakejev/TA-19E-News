import React, { useState } from "react";
import Head from 'next/head'
import ReactDOM, { render } from 'react-dom';
import { Image } from 'antd';
import styles from '../styles/boxes.module.css'

export default function newsboxes() {
    return (
        <div className={styles.container.fluid}>
            <Head>
                <title>News</title>
            </Head>

            <div className={styles.main.news}>
                <h2 className={styles.main.title}>Lorem ipsum</h2>
                <Image></Image>
                <p className={styles.main.content}>"Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                 consequat.</p>
            </div>
        </div>
    );
}