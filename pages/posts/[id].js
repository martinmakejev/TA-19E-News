import styles from '../../styles/Home.module.css';
import DetailLayout from '../../resources/layouts/news_detail_layout';

export default function Home() {
  return (
    <div className={styles.container_middle}>
      <DetailLayout />
    </div>
  );
}
