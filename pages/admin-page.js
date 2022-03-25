import React from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

const borderStyle = { border: '1px solid palevioletred' };
const rowStyle = { ...borderStyle, width: '100%', padding: 10 };

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Pealkiri',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Kuupäev',
      dataIndex: 'date',
      key: 'date',
    },
    {
        title: 'Autor',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: 'Kellele',
        dataIndex: 'who',
        key: 'who',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <a>Vaata</a>
            <a>Avalda</a>
            <a>Kustuta</a>
        </Space>
        ),
    },
  ];
  
  
  const data = [
    {
      id: '1',
      title: 'Polütehnikumi Õpilane Jan Kängsepp oli nähtud viimati kuuteistaas...',
      date: "22/1",
      author: 'Priit',
      who: "Asked",
    },
  ];
export default function adminpage() { 
    return (
        <Table columns={columns} dataSource={data} />
    )
}