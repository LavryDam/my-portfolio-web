import Image from "next/image";
import img1 from '../components/images/img1.jpeg';
import "./globals.css";

export default function HomePage() {
  return(
    <>
      <div className="image-container">
        <Image className="img" src={img1} alt="Background" layout="fill" objectFit="cover" />
        <h1 className="overlay-text">La creatividad y la tecnología se encuentran aquí</h1>
      </div>
    </>
  );
}