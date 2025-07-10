import { FaEnvelope, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="justify-center flex m-10">
      <p className="px-5 scale-150 hover:scale-200 transform duration-200">
        <Link to="https://www.instagram.com/pavishni_arts/#">
          <FaInstagram />
        </Link>
      </p>
      <p className="px-5 scale-150 hover:scale-200 transform duration-200">
        <Link to="https://www.youtube.com/@pavishni_arts">
          <FaYoutube />
        </Link>
      </p>
      <p className="px-5 scale-150 hover:scale-200 transform duration-200">
        <Link to="https://www.linkedin.com/in/pavishni-r/">
          <FaLinkedin />
        </Link>
      </p>
      <p className="px-5 scale-150 hover:scale-200 transform duration-200">
        <Link to="mailto:pavishniarts@gmail.com">
          <FaEnvelope />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
