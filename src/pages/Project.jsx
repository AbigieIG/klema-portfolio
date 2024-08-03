import  { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import desktop_1 from "../assets/images/project/desktop1.png";
import desktop_2 from "../assets/images/project/desktop2.png";
import desktop_3 from "../assets/images/project/desktop3.png";
import "@react-spring/web";

const projects = [
  {
    title: 'EllasTouch Makeover',
    description: "EllasTouch Makeover is a booking website and portfolio for a professional makeup artist. It allows clients to view the artist's work and easily book makeup services for events like parties, weddings, and photo shoots",
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Mongodb', 'Node.js', 'Express.js'],
    images: [desktop_1, desktop_2, desktop_3],
    link: 'https://ellastouch-makeover.vercel.app'
  }
];

const ProjectPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSwipe = (direction) => {
    if (direction === 'right' || direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="container mx-auto p-6 text-sm text-[--primary-color] flex flex-col items-center">
      {projects.map((project, index) => (
        <div key={index} className="mb-12 max-w-4xl w-full">
          <header className="text-left mb-6">
            <h1 className="text-xl font-bold text-[--main-color]">{project.title}</h1>
            <p className="mt-2 text-sm">{project.description}</p>
            <a target="_blank" href={project.link} className="text-xs mt-3 text-[--main-color]">Visit the website</a>
          </header>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <ul className="flex flex-wrap gap-4 list-disc list-inside">
              {project.technologies.map((tech, idx) => (
                <li className="underlin" key={idx}>
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className=" h-screen ">
            <h2 className="text-2xl font-semibold mb-4">Project Images</h2>
            <div className="relative flex justify-center">
       
              {project.images.map((image, idx) => (
                <TinderCard
                  key={idx}
                  onSwipe={onSwipe}
                  className={`absolute  bg-white shadow-lg rounded-lg overflow-hidden ${idx === currentIndex ? 'z-10' : 'z-0'}`}
                  preventSwipe={['up', 'down']}
                  style={{
                    transform: idx === currentIndex ? 'rotate(3deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={image}
                      alt={`Project ${index + 1} Image ${idx + 1}`}
                      className="object-cover w-full"
                    />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none text-center">
                <span className="flex items-center text-white text-xs bg-black bg-opacity-30 px-4 py-2 rounded-full">
                  <span>Slide to preview next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
                  </div>
                </TinderCard>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
