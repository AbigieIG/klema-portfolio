
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Title = (props) => {
  const { title, image, body, id, category } = props.data;
  return (
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      key={id}
      className="flex gap-3 pb-6 last:border-b-0 flex-col md:w-[50%] items-start justify-start w-[100%] border-b-2 border-[--border-color]"
    >
      {/*
      <img className='w-full h-[200px] object-cover'
      src={image} alt={`${title}`}/>
    */}

      <Link to={`page/${id}`}>
        <motion.h1 className="text-xl text-[--main-color] hover:text-red-700 underline cursor-pointer">
          {title}
        </motion.h1>
      </Link>
      <motion.p
        initial={{ y: "-1vw" }}
        animate={{ y: 0 }}
        className="text-sm text-[--primary-color]"
      >
        {body}
      </motion.p>
      <div className="flex justify-between w-full items-center">
        <motion.p className="text-pink-700/60">{category}</motion.p>
        <motion.img
          initial={{ x: "-5vw" }}
          animate={{ x: 0 }}
          className="w-[40px] h-[40px] rounded-xl "
          src={image}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Title;
