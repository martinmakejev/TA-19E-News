import React, { useState } from "react";
import { Form, Input, Button, Select, Upload, Alert } from 'antd';
import "antd/dist/antd.css";
import { UploadOutlined } from '@ant-design/icons';
import { TIME } from "mysql/lib/protocol/constants/types";

export default function admincreate() {

    const handleSubmit = (values) => {
        // valObj = JSON.parse(values)
//       const obj = {
//	"school_id": values.school_id,
//	"class_id": values.class_id,
//	"news_title": "uudis mis on uus aga see oli postmanis lisatrud",
//	"author_name": "Janeks",
//	"news_content": "kuidagi see töötab",
//	"news_images": "lol.png",
//	"release_date": "2022-03-29T12:06:11.719Z"
//

        console.log("ass", values)
        
        fetch("/api/v1/news/create", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            // credentials: "include"
          }).then(res => {
            if (res.status) {
                // return res.json();
            console.log(res)
            } else {
              console.log("we have a problem")
            }
          }).catch(res => {
            console.log("shits fucked up now")
          })
    }
    

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
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Title"
            name="news_title"
            rules={[
            {
                required: true,
                message: 'Title',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item label="Class" name="class_id" rules={[
            {
                required: true,
                message: "choose",
            },
            ]}>
            <Select>
                <Select.Option value="1">1</Select.Option>
            </Select>
        </Form.Item>
            {/* <Form.Item
            label="Class"
            name="selectclass"
            rules={[
            {
                required: true,
                message: 'Class',
            },
            ]}
        > <Input />
        </Form.Item> */}

        <Form.Item label="School" name="school_id" rules={[
            {
                required: true,
                message: "choose",
            },
            ]}>
            <Select>
                <Select.Option value="1">1</Select.Option>
            </Select>
        </Form.Item>

    {/* <Form.Item
            label="School"
            name="selectschool"
            rules={[
            {
                required: true,
                message: 'School',
            },
            ]}
        > <Input />
        </Form.Item> */}
        <Form.Item
            label="Text"
            name="news_content"
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
            name="news_images"
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
            <Button type="primary" htmlType="submit" >
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