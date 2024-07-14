
import BlogData from "../assets/Data/BlogData";
import Tittle from "../components/Title";


const Blogs = () => {
  return (
    <div className="flex  flex-col justify-center py-5 gap-10 w-full items-center px-5 md:px-[40px]">
      {BlogData.map((blog, i) => {
        return <Tittle data={blog} key={i} />;
      })}
    </div>
  );
};

export default Blogs;
