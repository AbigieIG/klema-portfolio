import { Link } from "react-router-dom";
import desktop_1 from "../assets/images/project/desktop1.png";
import desktop_2 from "../assets/images/project/desktop2.png";
import desktop_3 from "../assets/images/project/desktop3.png";



const projects = [
  {
    title: 'EllasTouch Makeover',
    description: "EllasTouch Makeover is a booking website and portfolio for a professional makeup artist. It allows clients to view the artist's work and easily book makeup services for events like parties, weddings, and photo shoots",
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Mongodb', 'Node.js', 'Express.js'],
    images: [ desktop_1 , desktop_2, desktop_3 ],
    link: 'https://ellas-touch-makeover.netlify.app/'
  }
];

const ProjectPage = () => {
  return (
    <div className="container mx-auto p-6 text-sm text-[--primary-color] flex flex-col items-center">
      {projects.map((project, index) => (
        <div key={index} className="mb-12 max-w-4xl w-full">
          <header className="text-left mb-6">
            <h1 className="text-xl font-bold text-[--main-color]">{project.title}</h1>
            <p className=" mt-2 text-sm">{project.description}</p>
            <Link to={project.link} className="text-xs mt-3 text-[--main-color]">Visit the webiste</Link>
          </header>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Project Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((image, idx) => (
                <div key={idx} className="bg-gray-300 h-[13rem] flex items-center justify-center">
                  <img src={image} alt={`Project ${index + 1} Image ${idx + 1}`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
