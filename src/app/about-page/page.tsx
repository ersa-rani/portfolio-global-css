import { Footer } from "../page";
export default function About() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/bg-about.jpeg')" }}
    >
      <h1>Personal Information</h1>
      <div className="puff-in-center">
      <p className="about-para">
        I am <b>ERSA RANI</b>.I am currently studying
        on grade 11,But,
        <br className="res-hide" />
        I am also getting skills like "HTML,TYPESCRIPT,JAVASCRIPT,
        <br />
        NEXT.JS,CSS,TAILWIND CSS,FIGMA" etc.I am participant of
        <br className="res-hide" />
        <b >CLOUD APPLIED GENERATIVE AI</b> course in
        the governor house of <br className="res-hide" />
        Sindh.This is my portfolio website with Nav of three pages and footer.
        <br className="res-hide" />
        You can contact me through my phone number or Email and also can visit
        <br className="res-hide" />
        my social accounts, links are given below on footer...
        <br />
        <b style={{ paddingLeft: "50%" }}>THANK YOU!</b>
      </p></div>
      <Footer />
      </div>
  );
}
