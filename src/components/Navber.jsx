import  { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { BsMoonStars } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";



import "./css/nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [moon, setMoon] = useState(false);
  const navs = [
    { title: "home", link: "/" },
    { title: "Project", link: "/project" },
    { title: "Blog", link: "/blog" },
  ];
  const location = useLocation();
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(location.pathname);
  }, [active, location]);


  const addMoon = () => {
    if (moon === true) {
      setMoon(false);
      setLightMode();
    } else {
      setMoon(true);
      setDarkMode();
    }
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  return (
    <header className="flex justify-between sticky top-0 z-50 backdrop-blur bg-[--bg-color]  items-center text-sm px-5 md:px-20 py-2 md:py-2 shadow w-[100%] ">
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        className="md:text-2xl t font-mono  logo transition duration-150 ease-out hover:ease-in relative cursor-pointer text-[--main-color] font-bold"
      >
        {" "}
        <Link to="/">{"<Klema.dev />"} </Link>{" "}
      </motion.div>
      <div className="flex items-center justify-center text-sm gap-3">
        {navs.map((nav, i) => (
          <NavLink
            to={nav.link}
            className={
              active === nav.link
                ? " capitalize border-b text-[--main-color] border-[--main-color]"
                : " capitalize text-[--primary-color]  "
            }
            key={i}
          >
            {nav.title}
          </NavLink>
        ))}
        <div
          onClick={() => addMoon()}
          className="  text-[--primary-color]   p-1 rounded-full"
        >
          {moon ? <BsMoonStars size={20} /> : <MdOutlineLightMode size={20} />}
        </div>
       
      </div>
    </header>
  );
};

export default Navbar;

