import { useState } from "react";

const AccordionItem = (props) => {
  const [showItem, setItemShow] = useState(null);

  const addShow = (id) => {
    if (showItem === id) {
      return setItemShow(null);
    }
    setItemShow(id);
  };

  const { question, answer, id } = props.data;
  return (
    <div
      key={id}
      style={{ transition: ".6s" }}
      className={
        showItem
          ? "flex  px-5 flex-col h-[200px] relative  gap-5 p-1 cursor-pointer overflow-hidden"
          : "flex px-5 flex-col h-[30px] gap-5 p-1 relative  cursor-pointer overflow-hidden"
      }
      onClick={() => addShow(id)}
    >
      <h3 className="border-b-2 border-[--border-color] pb-[1px] ">
        {" "}
        {question}{" "}
      </h3>
      <p className="text-sm leading-6"> {answer} </p>
      <span className="absolute  text-xl right-5">{showItem ? "-" : "+"} </span>
    </div>
  );
};

export default AccordionItem;
