import { FaEnvelope, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#bfa76f] text-[#2a1c00] py-6 shadow-inner">
      <div className="flex justify-center items-center gap-8 text-2xl">
        <a
          href="https://www.instagram.com/pavishni_arts/#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@pavishni_arts"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-200"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/pavishni-r/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:pavishniarts@gmail.com"
          className="hover:scale-125 transition-transform duration-200"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
