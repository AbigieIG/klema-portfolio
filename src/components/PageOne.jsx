import { useState } from "react";
import Form from "../components/Form";
import { motion } from "framer-motion";
import social from "../assets/Data/social";

const PageOne = () => {
  const [show, setShow] = useState(false);
  return (
    <motion.div className="flex relative mb-7 px-5 flex-col gap-2  md:flex-1 md:justify-start md:items-start md:gap-10 md:pt-5 justify-center  md:px-0">
      <motion.h3
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-xl font-bold text-[--main-color]"
      >
        Hi dear, <br />{" "}
        <span className="text-2xl font-bold">i'm Klema &#128525;</span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-md md:text-left  font-semibold"
      >
        Fullstack web developer user interface & user experience designer,
        graphic designer and a photographer
      </motion.p>
      <div className="flex items-center gap-5 mb-10 mt-2">
            {social.map((soc, i) => {
              return (
                <a className="flex items-center  gap-1" href={soc.link} key={i}>
                  <span className="cursor-pointer">{soc.icon}</span>
                </a>
              );
            })}
          </div>
      <motion.button
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        onClick={() => setShow(true)}
        className=" bg-[--ts-button] w-[15rem] text-white font-bold px-10 py-3 flex gap-3 items-center justify-center"
      >
     <span>Lets Work</span>
          <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
      </motion.button>
      {show && <Form fn={() => setShow(false)} />}
  
    
    </motion.div>
  );
};

export default PageOne;
