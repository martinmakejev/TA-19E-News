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

  const { data: newsData, error: newsError } = useSWR(`/api/v1/news/${id}`, fetcher);
  //const { data: schoolsData, error: schoolError } = useSWR("/api/users", userFetcher);

  console.log(newsData, newsError);

  if (newsError) return "An error has occurred.";
  if (!newsData) return "Loading...";

  return (
    <div>
      <Layout className="layout" style={{ backgroundColor: "white" }}>
        <Header />
        <Content className={styles.container}>
          <div className="site-layout-content">
            <div>
              <div>
                <h1>{newsData.news.news_title}</h1>
                <p>Autor: {newsData.news.author_name}</p>
              </div>
              <div>
                <Image
                  alt="placeholder"
                  src={newsData.news.news_images}
                  layout="responsive"
                  width={100}
                  height={50}
                  objectFit= "cover"
                />
              </div>
              <p style={{float: "right"}}>Kuupäev: {new Date(newsData.news.release_date).toLocaleDateString()}</p>
              <p>Kool: {newsData.news.school_id}</p>
              <p>Klass: {newsData.news.class_id}</p>
              <div style={{ paddingTop: "20px" }}>
                <p>{newsData.news.news_content}</p>
              </div>
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}
