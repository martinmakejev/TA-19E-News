import styles from '../../styles/boxes.module.css'
import Image from 'next/image'
import "antd/dist/antd.css";
import useSWR from "swr";
import React from 'react';
import { Row, Col } from 'antd';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Newsboxes() {
    const { data, error } = useSWR(
        "/api/v1/news/latest?count=11",
        fetcher
      );
    console.log(data);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    return (
        <div>
            <Row>
                <Col span={12}>
                    <div className={styles.mainNews}>
                        <Image 
                            width={600}
                            height={600}
                            src={data.latestnews[0].news_images}
                        />
                        <h2>{data.latestnews[0].news_title}</h2>
                        <p>{new Date(data.latestnews[0].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[0].id}>loe edasi</a>
                    </div>
                </Col>
                <Col span={12}>
                    <Row span={12}>
                        <div className={styles.news}>
                            <Image
                                width={150}
                                height={150}
                                src={data.latestnews[1].news_images}
                            />
                            <h2>{data.latestnews[1].news_title}</h2>
                            <p>{new Date(data.latestnews[1].release_date).toLocaleDateString()}</p>
                            <a href={"/posts/"+data.latestnews[1].id}>loe edasi</a>
                        </div>
                    </Row>
                    <Row span={12}>
                        <div className={styles.news1}>
                            <Image
                                width={150}
                                height={150}
                                src={data.latestnews[2].news_images}
                            />
                            <h2>{data.latestnews[2].news_title}</h2>
                            <p>{new Date(data.latestnews[2].release_date).toLocaleDateString()}</p>
                            <a href={"/posts/"+data.latestnews[2].id}>loe edasi</a>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div className={styles.news2}>
                        <Image 
                            width={250}
                            height={250}
                            src={data.latestnews[3].news_images}
                        />
                        <h2>{data.latestnews[3].news_title}</h2>
                        <p>{new Date(data.latestnews[3].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[3].id}>loe edasi</a>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.news3}>
                        <Image
                            width={250}
                            height={250}
                            src={data.latestnews[4].news_images}
                        />
                        <h2>{data.latestnews[4].news_title}</h2>
                        <p>{new Date(data.latestnews[4].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[4].id}>loe edasi</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div className={styles.news2}>
                        <Image
                            width={250}
                            height={250}
                            src={data.latestnews[5].news_images}
                        />
                        <h2>{data.latestnews[5].news_title}</h2>
                        <p>{new Date(data.latestnews[5].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[5].id}>loe edasi</a>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.news2}>
                        <Image
                            width={250}
                            height={250}
                            src={data.latestnews[5].news_images}
                        />
                        <h2>{data.latestnews[5].news_title}</h2>
                        <p>{new Date(data.latestnews[5].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[5].id}>loe edasi</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <div className={styles.news2}>
                        <Image
                            width={250}
                            height={250}
                            src={data.latestnews[5].news_images}
                        />
                        <h2>{data.latestnews[5].news_title}</h2>
                        <p>{new Date(data.latestnews[5].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[5].id}>loe edasi</a>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.news2}>
                        <Image
                            width={250}
                            height={250}
                            src={data.latestnews[5].news_images}
                        />
                        <h2>{data.latestnews[5].news_title}</h2>
                        <p>{new Date(data.latestnews[5].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[5].id}>loe edasi</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <div className={styles.news2}>
                        <Image
                            width={250}
                            height={250}
                            src={data.latestnews[5].news_images}
                        />
                        <h2>{data.latestnews[5].news_title}</h2>
                        <p>{new Date(data.latestnews[5].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[5].id}>loe edasi</a>
                    </div>
                </Col>
                <Col span={6}>
                    <div className={styles.news2}>
                        <Image
                            width={250}
                            height={250}
                            src={data.latestnews[5].news_images}
                        />
                        <h2>{data.latestnews[5].news_title}</h2>
                        <p>{new Date(data.latestnews[5].release_date).toLocaleDateString()}</p>
                        <a href={"/posts/"+data.latestnews[5].id}>loe edasi</a>
                    </div>
                </Col>
            </Row>
        </div>
        
        
        
        
        //     <div className={styles.news3}>
        //         <Image
        //             width={250}
        //             height={250}
        //             src={data.latestnews[6].news_images}
        //         />
        //         <h2>{data.latestnews[6].news_title}</h2>
        //         <p>{new Date(data.latestnews[6].release_date).toLocaleDateString()}</p>
        //         <a href={"/posts/"+data.latestnews[6].id}>loe edasi</a>
        //     </div>
        //     <div className={styles.news2}>
        //         <Image
        //             width={250}
        //             height={250}
        //             src={data.latestnews[7].news_images}
        //         />
        //         <h2>{data.latestnews[7].news_title}</h2>
        //         <p>{new Date(data.latestnews[7].release_date).toLocaleDateString()}</p>
        //         <a href={"/posts/"+data.latestnews[7].id}>loe edasi</a>
        //     </div>
        //     <div className={styles.news3}>
        //         <Image
        //             width={250}
        //             height={250}
        //             src={data.latestnews[8].news_images}
        //         />
        //         <h2>{data.latestnews[8].news_title}</h2>
        //         <p>{new Date(data.latestnews[8].release_date).toLocaleDateString()}</p>
        //         <a href={"/posts/"+data.latestnews[8].id}>loe edasi</a>
        //     </div>
        //     <div className={styles.news2}>
        //         <Image
        //             width={250}
        //             height={250}
        //             src={data.latestnews[9].news_images}
        //         />
        //         <h2>{data.latestnews[9].news_title}</h2>
        //         <p>{new Date(data.latestnews[9].release_date).toLocaleDateString()}</p>
        //         <a href={"/posts/"+data.latestnews[9].id}>loe edasi</a>
        //     </div>
        //     <div className={styles.news3}>
        //         <Image
        //             width={250}
        //             height={250}
        //             src={data.latestnews[10].news_images}
        //         />
        //         <h2>{data.latestnews[10].news_title}</h2>
        //         <p>{new Date(data.latestnews[10].release_date).toLocaleDateString()}</p>
        //         <a href={"/posts/"+data.latestnews[10].id}>loe edasi</a>
        //     </div>
        //</div>
    );
}

export default Newsboxes;
