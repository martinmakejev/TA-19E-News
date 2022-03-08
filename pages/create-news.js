import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import React, { useState } from "react";
import { DatePicker } from 'antd';
import ReactDOM, { render } from 'react-dom';
import { Form, Input, Button, Select, Upload } from 'antd';
import "antd/dist/antd.css";
import { UploadOutlined } from '@ant-design/icons';

export default function create_news() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
    };

    return (
        <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 8,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Title"
            name="title"
            rules={[
            {
                required: true,
                message: 'Title',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item label="Select">
            <Select>
                <Select.Option value="demo">Demo</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item label="Select">
            <Select>
                <Select.Option value="demo">Demo</Select.Option>
            </Select>
        </Form.Item>
    
        <Form.Item
            label="Text"
            name="textarea"
            rules={[
            {
                required: true,
                message: 'Text',
            },
            ]}
        >
            <Input.TextArea />
        </Form.Item>
        <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
        >
            <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
        </Form.Item>
    
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Cancel
            </Button>
        </Form.Item>
        </Form>
    );
}