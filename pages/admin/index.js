import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import useSWR from "swr";
import { useRouter } from 'next/router';
import { Popconfirm, message } from 'antd';
import deleteNews from "../api/v1/news/delete";
import { PrismaClient } from "@prisma/client";

const fetcher = (url) => fetch(url).then((res) => res.json());

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
  // const { data, error } = useSWR(
  //   "/api/v1/news/delete",
  //   fetcher
  //);
  console.log(data);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
    
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

const borderStyle = { border: "1px solid palevioletred" };
const rowStyle = { ...borderStyle, width: "100%", padding: 10 };

export default function adminpage() {
  const { data, error } = useSWR("/api/v1/news");
  const router = useRouter();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Pealkiri",
      dataIndex: "news_title",
      key: "news_title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Sisu",
      dataIndex: "news_content",
      key: "news_content",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Kuupäev",
      dataIndex: "release_date",
      key: "release_date",
    },
    {
      title: "Autor",
      dataIndex: "author_name",
      key: "author_name",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() =>  router.push("/posts/"+record.id)}>Vaata</a>
          <a>Muuda</a>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a>Kustuta</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];


  
  return (
    <>
    <button onClick={() =>  router.push("/admin/create")}>Lisa uudis</button>
  <Table 
  columns={columns} 
  dataSource={data?.news || []} 

  />
  </>
    );
}
