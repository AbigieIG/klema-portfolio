import accordion from "../assets/Data/Question";
import AccordionItem from "../components/AccordionItem";

const Accordion = () => {
  return (
    <div>
      <h3 className="text-[--main-color] underline px-5 pt-5 pb-2 text-xl text-center">
        Related Question{" "}
      </h3>
      <div></div>
      <div className="flex gap-2 flex-col md:w-[50%] justify-center items-center m-auto">
        {accordion.map((accord, id) => {
          return <AccordionItem data={accord} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Accordion;
