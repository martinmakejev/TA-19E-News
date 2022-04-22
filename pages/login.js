import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Button, Alert, Card } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [error, setLoginError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');
    if (errorParam === 'CredentialsSignin') {
      setLoginError('Invalid username or password');
    }
  }, []);

  const sendCredentials = async (credentials) => {
    console.log('credentials', credentials);
    const res = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
      callbackUrl: '/admin',
    });
    if (res?.error) {
      setLoginError(res.error);
    } else {
      setLoginError(null);
    }
    if (res.url) router.push(res.url);
  };

  return (
    <div className="center">
      <Head>
        <title>Login</title>
      </Head>
      <Card title="Login" bordered={true}>
        <Form
          name="basic"
          onFinish={sendCredentials}
          initialValues={{ remember: true }}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            type="email"
            rules={[{ required: true, message: 'Input email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            type="password"
            style={{ 'margin-bottom': '4px' }}
            rules={[{ required: true, message: 'Input password' }]}
          >
            <Input.Password />
          </Form.Item>
          {error && (
            <Alert
              style={{ marginBottom: 24, alignSelf: 'stretch' }}
              message="Invalid credentials"
              type="error"
              showIcon
              closable
            />
          )}

          <Form.Item style={{ 'margin-bottom': '4px' }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
