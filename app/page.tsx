import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return(
    <>
      <div className="image-container">
        <h1 className="overlay-text">La creatividad y la tecnología se encuentran aquí</h1>
      </div>
      <Link href="#about" className="arrow-link">
        <div className="arrow"/>
      </Link>
    </>
  );
}