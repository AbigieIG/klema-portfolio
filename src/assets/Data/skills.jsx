import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si"
import { IoPrism } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

const skills = [
  { title: "react Js", icon: <FaReact className="text-sky-500" size={40} /> },
  { title: "node Js", icon: <FaNodeJs size={40} /> },
  { title: "express Js", icon: <SiExpress className="text-gray-400"  size={40} /> },
  { title: "typescript", icon: <SiTypescript className="text-sky-500" size={40} /> },
  { title: "vanila js", icon: <FaSquareJs className="text-yellow-400"  size={40} /> },
  { title: "tailwind css", icon: <SiTailwindcss className="text-sky-500" size={40} /> },
  { title: "mongo db", icon: <SiMongodb className="text-green-600" size={40} /> },
  { title: "mysql", icon: <SiMysql className="text-sky-500"  size={50} /> },
  { title: "prima", icon: <IoPrism className="text-sky-500"  size={50} /> },
  { title: "sequelize", icon: <SiSequelize className="text-blue-600" size={40}  /> },
  { title: "Vue Js", icon: <FaVuejs size={40}  /> },
  { title: "figma", icon: <FaFigma className="text-red-600" size={40} /> },
  { title: "photoshop", icon: <SiAdobephotoshop className="text-sky-600"  size={40} /> },
];

export default skills;
