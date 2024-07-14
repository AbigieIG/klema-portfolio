
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="justify-center  items-center m-auto px-1">
      <h1 className="md:text-3xl text-xl text-center font-bold text-[--primary-color]">
        Get in touch with us
      </h1>
      <div className="flex gap-5 justify-center items-center mt-5">
        <motion.a
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          href="https://github.com/AbigieIG"
          target="blank"
        >
          {" "}
          <FaGithub size={30} />{" "}
        </motion.a>
        <motion.a
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          href="https://api.whatsapp.com/message/4O6426BBTOKHG1?autoload=1&app_absent=0"
          target="blank"
        >
          {" "}
          <FaWhatsapp size={30} />{" "}
        </motion.a>
        <motion.a
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          href="https://twitter.com/Abigie19"
          target="blank"
        >
          {" "}
          <BsTwitterX size={30} />{" "}
        </motion.a>
        <motion.a
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          href="https://www.instagram.com/c.l.e.m.y_1/?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"
          target="blank"
        >
          {" "}
          <FaInstagram size={30} />{" "}
        </motion.a>
        <motion.a
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          href="https://www.linkedin.com/in/abigie-clement-4965962a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="blank"
        >
          {" "}
          <FaLinkedinIn size={30} />{" "}
        </motion.a>
      </div>
    </div>
  );
};

export default Social;
