import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import useSWR from "swr";

const borderStyle = { border: "1px solid palevioletred" };
const rowStyle = { ...borderStyle, width: "100%", padding: 10 };

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
        <a>Vaata</a>
        <a>Avalda</a>
        <a>Kustuta</a>
      </Space>
    ),
  },
];

// const data = [
//   {
//     id: "1",
//     news_title:
//       "Polütehnikumi Õpilane Jan Kängsepp oli nähtud viimati kuuteistaas...",
//     release_date: "22/1",
//     author_name: "Priit",
//     school: "Asked",
//     class: "TA-19E",
//   },
//   {
//     id: "2",
//     news_title:
//       "Polütehnikumi Õpilane Jan Kängsepp oli nähtud viimati kuuteistaas...",
//     release_date: "22/1",
//     author_name: "Priit",
//     school: "Asked",
//     class: "TA-19E",
//   },
// ];
export default function adminpage() {
  const { data, error } = useSWR("/api/v1/news");
  return <Table columns={columns} dataSource={data?.news || []} />;
}
