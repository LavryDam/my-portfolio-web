import Link from "next/link";
import "./contactPage.css"
import Image from "next/image";

export const metadata = {
    title: "Contacto",
}

function contactoPage(){
    return(
        <div className="contact-page">
            <h1>Contacto</h1>
            <div className="contact-item">
                <div>
                    <Image src="/docs/gmail.png" width={45} height={45} alt="Imagen gmail"/>
                </div>
                <div className="contact-text">
                    <h3>Correo electronico:</h3>
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=dinamartinezruiz@gmail.com" target="_blank">dinamartinezruiz@gmail.com</Link>    
                </div>
            </div>
            <div className="contact-item">
                <div>
                    <Image src="/docs/phone.png" width={45} height={45} alt="Imagen telefono"/>
                </div>
                <div className="contact-text">
                    <h3>Telefono:</h3>
                    <Link href="tel:+34665059581">665059581</Link> 
                </div>
            </div>
        </div>
    );
}

export default contactoPage;