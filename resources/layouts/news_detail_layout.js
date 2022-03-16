import Image from "next/image"


export default function DetailLayout(){
    return(
        <div>
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