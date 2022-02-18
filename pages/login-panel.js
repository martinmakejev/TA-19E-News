import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/api/v1/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      })

    }).then(function(response){
      return response.json();
    }).then(function(userData){
      console.log(userData);
    }).catch(function(error){
      console.error(error);
    })
  }

  function SQLForm(theemail, thepassword) {
    const axios = require('axios');
    axios.get('https://news.webhosting.tptlive.ee/', {
      params: {
        email:theemail,
        password:thepassword
      }
    })
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }


  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        
      </Form>
    </div>
  );
}
