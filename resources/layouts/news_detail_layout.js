import Image from "next/image";
import useSWR from "swr";
import styles from "../../styles/boxes.module.css";
import { Layout } from "antd";
import Footer from "../components/footer";
import Header from "../components/header";
import { useRouter } from "next/router";

const { Content } = Layout;
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailLayout() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/v1/news/${id}`, fetcher);

  console.log(data, error);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div>
      <Layout className="layout" style={{ backgroundColor: "white" }}>
        <Header />
        <Content className={styles.container}>
          <div className="site-layout-content">
            <div>
              <h1>{data.news.news_title}</h1>
              <Image
                alt="placeholder"
                src={data.news.news_images}
                layout="responsive"
                width={100}
                height={50}
              />
              <p>Autor: {data.news.author_name}</p>
              <p>Kuupäev: {data.news.release_date}</p>
              <p>Kool: {data.news.school_id}</p>
              <p>Klass: {data.news.class_id}</p>
              <div style={{ paddingTop: "20px" }}>
                <p>{data.news.news_content}</p>
              </div>
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}
