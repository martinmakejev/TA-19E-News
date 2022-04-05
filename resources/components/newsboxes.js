import styles from '../../styles/boxes.module.css'
import Image from 'next/image'
import "antd/dist/antd.css";
import useSWR from "swr";
import React from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Newsboxes() {
    const { data, error } = useSWR(
        "/api/v1/news/latest",
        fetcher
      );
    console.log(data);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    return (
        <div className={styles.grid}>
            <div className={styles.mainNews}>
                <Image 
                    width={600}
                    height={600}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[0].news_title}</h2>
            </div>
            <div className={styles.news}>
                <Image
                    width={150}
                    height={150}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[1].news_title}</h2>
            </div>
            <div className={styles.news1}>
                <Image
                    width={150}
                    height={150}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[2].news_title}</h2>
            </div>
            <div className={styles.news2}>
                <Image 
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[3].news_title}</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[4].news_title}</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[5].news_title}</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[6].news_title}</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[7].news_title}</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[8].news_title}</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[9].news_title}</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>{data.latestnews[10].news_title}</h2>
            </div>
        </div>
    );
}

export default Newsboxes;
