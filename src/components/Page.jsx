
import { useParams } from "react-router-dom";
import BlogData from "../assets/Data/BlogData";
import { motion } from "framer-motion";

const Page = () => {
  const { Id } = useParams();
  const page = BlogData.find((e) => e.id === Number(Id));

  return (
    <div className="flex  flex-col justify-center py-5 gap-10 w-full items-center px-5 md:px-[40px]">
      <div className="flex gap-5 pb-6 last:border-b-0 flex-col md:w-[50%] items-start justify-start w-[100%] border-b-2 border-[--border-color]">
        <motion.img
          initial={{ y: "-10vw" }}
          animate={{ y: 0 }}
          className="w-full h-[200px] object-cover md:h-[400px] "
          src={page.image}
          alt=""
        />
        <p className="text-xl text-[--primary-color]">{page.title}</p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headOne}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphOne}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headTwo}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphTwo}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headThree}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphThree}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headFour}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.ParagraphFour}
        </p>
        <img src={page.picture} alt="" />
        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headFive}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphFive}
        </p>
        <img src={page.pictureTwo} alt="" />

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headSix}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphSix}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headSeven}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphSeven}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headEight}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphEight}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headNine}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphNine}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headTen}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphTen}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headEleven}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphEleven}
        </p>

        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headTwelve}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paragraphTwelve}
        </p>
        <h1 className="text-2xl md:text-3xl text-[--primary-color]">
          {page.headThirteen}
        </h1>
        <p className="text-md leading-8 md:leading-10 text-[--primary-color] md:text-xl">
          {page.paraThirteen}
        </p>
      </div>
    </div>
  );
};

export default Page;
