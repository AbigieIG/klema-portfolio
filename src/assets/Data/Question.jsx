const question = [
  {
    id: 1,
    question: "About Me",
    answer: "I'm Ugbonomi Clement Abigie, a seasoned web developer, UX/UI designer, graphic designer, photographer, and cinematographer. With a rich background in various creative and technical fields, I'm passionate about crafting unique digital experiences. I'm also the CEO of Astudio Studio Photography, where we specialize in capturing life's beautiful moments through a lens."
  },
  {
    id: 2,
    question: "What can I do for you?",
    answer: "I offer a range of services, including website design and development, tailored to meet your specific needs. My focus is on creating visually appealing and functional websites with user-friendly interfaces that ensure a seamless experience for your visitors. Whether you need a simple landing page or a complex e-commerce platform, I provide affordable solutions without compromising on quality. You can rely on me to bring your vision to life with precision and creativity."
  },
  {
    id: 3,
    question: "How to get in touch with me",
    answer: (
      <>
        I'm always open to discussing new projects and opportunities. You can reach out to me via email at{" "}
        <a
          onClick={(e) => e.stopPropagation()}
          className="text-blue-600"
          href="mailto:klemadev@gmail.com"
        >
          klemadev@gmail.com
        </a>{" "}
        for inquiries or collaborations. Additionally, you can connect with me on WhatsApp or call me at{" "}
        <a
          className="text-blue-600"
          onClick={(e) => e.stopPropagation()}
          href="tel:+2349015005789"
        >
          +2349015005789
        </a>{" "}
        for a more direct conversation. I'm available to answer any questions you may have and guide you through the process of creating a remarkable digital presence.
      </>
    ),
  },
  {
    id: 4,
    question: "How much do I charge?",
    answer: "My pricing is flexible and depends on the specific requirements and complexity of your project. I offer competitive rates that reflect the quality and effort put into each project. To get an accurate quote, please reach out to me with details about what you need or the content of your site. I'll provide you with a personalized estimate and discuss the best approach to achieve your goals. You can also connect with me on social media for more insights into my work and pricing."
  },
];

export default question;
