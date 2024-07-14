import skill from "../assets/Data/skills";

const Skills = () => {
  return (
    <div className="grid grid-flow-col overflow-x-scroll py-3 gap-4 mt-2">
      {skill.map((s, i) => {
        return (
          <div
            className="bg-[--ts-skill] text-white w-[7rem] rounded-xl h-[7rem] flex flex-col justify-center  items-center"
            key={i}
          >
            <span>{s.icon}</span>
            <span> {s.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
