import React, { useState } from 'react';
import {
  Form, Input, Button, Select, Upload,
} from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';

export default function adminedit() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
      <Form.Item
        label="Class"
        name="selectclass"
        rules={[
          {
            required: true,
            message: 'choose',
          },
        ]}
      >
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="School"
        name="selectschool"
        rules={[
          {
            required: true,
            message: 'choose',
          },
        ]}
      >
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
        label="Upload image (link)"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Input />
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
