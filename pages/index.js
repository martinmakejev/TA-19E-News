import styles from '../styles/Home.module.css'
import MainLayout from '../resources/layouts/main_layout'



export default function Home() {
  //const [content, setContent] = useState([]);
  const content = [{title: "Cat1", src:"pages/placeholder.jpeg"},{title: "Cat2", src:"placeholder.jpg"},{title: "Cat3", src:"placeholder.jpg"}]

  /*useEffect(function() {
    fetch("").then(res => res.json()).then(data => setContent(data))
  }, []) */

  return (
    <div className={styles.container}>
        <MainLayout/>
    </div>
    
  )
  
}
