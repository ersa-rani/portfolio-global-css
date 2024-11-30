import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/bg-home.jpeg')" }}
      >
        <div className="div-intro">
          <div className="puff-in-center">
          <p>
            Hey There,
            <br />
            I'm ERSA <b>RANI</b>!
          </p>
          <p className="over-view" >
            I'm Creative UI/UX Designer
            <br /> From Pakistan...
          </p>
          <p>
            <Link href="/contact-page" target="_blank">
              <button className="hire-me">HIRE ME!</button>
            </Link>
          </p>
          <img
            src="profile.jpeg"
            alt="profile picture"
            className="profile-pic"

          />
        </div>
        </div>
      <Footer />
    </div>
  );
}
export function Footer() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/bg-footer.jpeg')" }}
      >
        <div className="footer" color="white">
          <ul className="index">
            <li>INFORMATION</li>
            <li>CONTACT</li>
            <li>SOCIAL MEDIA</li>
          </ul>
          <ul className="info">
            <li>Home</li>
            <br /> <br />
            <li>About-Mee</li>
            <br /> <br />
            <li>contact</li>
          </ul>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14481.397481748192!2d67.25764153255341!3d24.
            851914516255057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3317d179c7ea5%3A0xe7de0f37cad8a69b!
            2sShah%20Latif%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730819600572!
            5m2!1sen!2s"
            width="600"
            height="450"
            className="map"
          ></iframe>
          <p className="contact"> 03040027763</p>
          <a href="mailto:ersarani955@gmail.con" target="_blank">
            <p className="footer-email"> ersarani955@gmail.com</p>
          </a>
          <FaMapMarkerAlt className="map-vec" />
          <FaPhone className="phone-vec" />
          <MdMarkEmailUnread className="email-vec" />
          <a
            href="https://www.facebook.com/share/3iERBqeaz4iYtzT4/"
            target="_blank"
          >
            <FaFacebookSquare className="face-vec" />
          </a>
          <a
            href="https://www.linkedin.com/in/ersa-rani-b4b4842b6/"
            target="_blank"
          >
            <SiLinkedin className="link-vec" />
          </a>
          <a
            href="https://www.instagram.com/ersa_rani?igsh=bHoydmptOXMyOGM0"
            target="_blank"
          >
            <FaInstagramSquare className="insta-vec" />
          </a>
          <a href="https://github.com/ersa-rani" target="_blank">
            <FaGithub className="git-vec" />
          </a>
        </div>
      </div>
      <div />
    </div>
  );
}
