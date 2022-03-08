import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function admin_page() {
    return (
        <div>
            <h2>Create news page</h2>
            <Button onClick={()=>{window.location.href="/create-news"}}>Create news page</Button>
        </div>

    )
}