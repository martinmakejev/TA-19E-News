import React, { useState } from "react";
import styles from '../styles/boxes.module.css'

//logo header
//nav content
//footer

export default function newsboxes() {
    return (
        <div className={styles.container}>
                <div className={styles.mainNews}>
                    <h2>Lorem ipsum</h2>
                    <p>asadfdshfjsdajfhksdfjksdhfuisadjfsda</p>
                </div>
                <div className={styles.news}>Lorem ipsum 1</div>
                <div className={styles.news1}>Lorem ipsum 2</div>
        </div>
    );
}

