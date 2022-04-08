import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import useSWR from "swr";
import { useRouter } from 'next/router';

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
          <a>Kustuta</a>
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
