import  { useEffect, useState } from "react";
import slide from "../assets/Data/Slides";
import { motion } from "framer-motion";

const Carousel = () => {
  const [curr, setCurr] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      if (curr < slide.length - 1) {
        setCurr(curr + 1);
      } else {
        setCurr(curr - slide.length + 1);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [curr]);

  return (
    <div className="md:flex-1 relative px-2 py-2">
      <motion.img
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="md:rounded-xl transition-[.2] object-cover rounded-lg relative h-[250px] drop-shadow-sm md:h-[400px] w-full"
        src={slide[curr].image}
        alt="slide"
      />

      <div className="flex gap-4 my-2 w-[150px] top-[-50px] shadow-xl relative bg-white/30 p-2 rounded-full justify-center items-center m-auto">
        {slide.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurr(i)}
            className={
              curr === i
                ? "w-[17px] h-[17px] bg-sky-600 rounded-full animate-bounce cursor-pointer"
                : "w-[15px] h-[15px] bg-white rounded-full animate-bounce cursor-pointer"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
