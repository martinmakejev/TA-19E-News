import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { Popconfirm, message } from "antd";

function confirm(e) {
  console.log(e);
  message.success("Click on Yes");
}

function cancel(e) {
  console.log(e);
  message.error("Click on No");
}

const borderStyle = { border: "1px solid palevioletred" };
const rowStyle = { ...borderStyle, width: "100%", padding: 10 };

export default function adminpage() {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR("/api/v1/news");
  const router = useRouter();

  function handleDelete(id) {
    fetch("/api/v1/news/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Delete student response: ", json);
        mutate(`/api/v1/news`);
      });
  }

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
          <a onClick={() => router.push("/posts/" + record.id)}>Vaata</a>
          <a onClick={() => router.push("/admin/edit")}>Muuda</a>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={(confirm) => handleDelete(record.id)}
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
      <button onClick={() => router.push("/admin/create")}>Lisa uudis</button>
      <Table columns={columns} dataSource={data?.news || []} />
    </>
  );
}
