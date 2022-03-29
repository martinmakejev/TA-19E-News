import styles from '../../styles/boxes.module.css'
import Image from 'next/image'
import "antd/dist/antd.css";
import useSWR from "swr";
import React from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Newsboxes() {
    const { data, error } = useSWR(
        "/api/v1/news",
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
                <h2>{data.news[0].news_title}</h2>
            </div>
            <div className={styles.news}>
                <Image
                    width={150}
                    height={150}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 1</h2>
            </div>
            <div className={styles.news1}>
                <Image
                    width={150}
                    height={150}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem Ipsum 2</h2>
            </div>
            <div className={styles.news2}>
                <Image 
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 3</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 4</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 5</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 6</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 7</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 8</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 9</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src={"/../public/placeholder.jpg"}
                />
                <h2>Lorem ipsum 10</h2>
            </div>
        </div>
    );
}

export default Newsboxes;
