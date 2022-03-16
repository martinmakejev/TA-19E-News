import Image from "next/image"
import styles from '../../styles/boxes.module.css'


export default function DetailLayout(){
    return(
        <div className={styles.container_middle}>
            <h1></h1>
            <Image
                src={"/../public/placeholder.jpg"}
                width={1000}
                height={500}/>
            <div>
                <p>Siin on tekst</p>
            </div>
        </div>
    )
}