



import Accordion from "../components/Accordion";
import Skill from "../components/Skill";
import Carousel from "../components/Carousel";
import PageOne from "../components/PageOne";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const Home = () => {
  return (
    <motion.div layout className="md:px-20 w-full  md:py-5 text-[--primary-color]">
      <div className="flex flex-col md:flex-row  md:gap-10">
        <Carousel />
        <PageOne />
      

      </div>
      {/* <Social /> */}
     <div className="my-5 px-3 w-full">
     <h1 className="text-xl">My Skills</h1>
     <Skill />
     </div>
      <Accordion />

      <ul className="flex gap-10 justify-center items-center pt-10 underline  list-disc">
        <li className="hover:text-red-700">
          <Link to={"/project"}>Project</Link>
        </li>
        <li className="hover:text-red-700">
          <Link to={"/blog"}>Blogs</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Home;
