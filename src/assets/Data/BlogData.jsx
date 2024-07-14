import picture1 from "../images/blog/b_img1.JPG";
import picture2 from "../images/blog/b_img2.JPG";
import picture3 from "../images/blog/b_img3.JPG";
import pic1 from "../images//blog/html.jpeg"
import pic2 from "../images/blog/post.png"

const data = [
  {
    id: 1,
    image: picture1,
    title: "Introduction to web development 🧑‍💻",
    body: `Due to the rise in digital footprints,
               almost everyone: businesses or individual
                ventures want to get their 
               businesses up on the big world wide web`,
    category: "Web development",
    headOne: "Introduction",
    paragraphOne: `Due to the rise in digital footprints, almost everyone: 
        businesses or individual ventures want to get their businesses up on the 
        big world wide web. Thanks to this, there is an increased demand for digital
         visibility. The best way to do this is to have your website, representing your
          business brand or personal identity.This new wave has led to an increased demand 
          for web developers. In this article, and the rest in the series, we will be teaching 
          you how to get started on web development, giving you everything you need to know to 
          launch you into the journey. Please note that this tutorial is not comprehensive,
         and does not in any way seek to replace proper learning and practice. This is just an overview.`,
    headTwo: "Overview",
    paragraphTwo: `Web development involves building websites and web applications 
         for the Internet using various programming languages, tools, and frameworks.
          There are two main areas of web development: frontend development and backend development.`,
    headThree: "Frontend Development",
    paragraphThree: `Frontend development involves creating the parts of a website or application 
          that users interact with directly.
           This includes the design, layout, and functionality of the user interface.`,
    headFour: "HTML",
    ParagraphFour: `
           HTML (Hypertext Markup Language) is the standard language used to create web pages.
            It provides the structure and content of a web page and is used to define the different elements of a page, 
           such as headings, paragraphs, images, and links. This is what a website built with only HTML looks like`,
    picture: pic1,       
    headFive: "CSS",
    paragraphFive: `
           CSS (Cascading Style Sheets) controls the presentation of a web page. It is used to style the elements
            defined in HTML and can be used to create layouts, color schemes, and visual effects. CSS affects the
            general layout of a website,
            beautifying it and putting things in a more visually appealing appearance.`,
    pictureTwo: pic2,        
    headSeven: "JavaScript ",
    paragraphSeven: `
            JavaScript is a programming language that is used to add interactivity and functionality 
            to a website or application. It is used to create
             animations, validate forms, and enable user interactions such as clicking and scrolling.`,

    headEight: " Backend development",
    paragraphEight: `Backend development involves creating the parts of a 
            website or application that are not
             visible to users. This includes the server-side logic, the database, and APIs.`,

    headNine: "Server-side languages ",
    paragraphNine: `Server-side languages such as PHP, Python, and Ruby are used to create dynamic web pages 
            that can interact with a database or other external data sources.
             These languages are executed on the server and generate HTML that is sent to the client's browser.`,

    headTen: "Databases ",
    paragraphTen: `Databases are used to store and organize large amounts of data for web applications.
            Common databases used in web development include MySQL, MongoDB, and PostgreSQL.`,

    headEleven: "APIs ",
    paragraphEleven: `
            APIs (Application Programming Interfaces) are used to allow different systems to communicate with each other.
             They are often used to integrate different web services,
             such as social media platforms or payment gateways, into a web application. Here's a summary of the two roles.`,

    headTwelve: "Conclusion",
    paragraphTwelve: `
             Overall, web development involves a combination of frontend and backend development to create web pages and applications 
             that are both visually appealing and functional.`,

    headThirteen: "thanks for reading",
  },
  {
    id: 2,
    image: picture2,
    title: "The Important of Responsive Web Design",
    body: `The concept of responsive web design is now playing 
               an integral role in the lives of web developers`,
    category: "responsive web",
    paragraphOne: `The concept of responsive web design is now playing
         an integral role in the lives of web developers (and designers). 
         Responsiveness is not a part of the web design checklist today, 
         but is considered a de facto property that is understood but never'
          spoken of. So how come this design strategy became so important 
          within such a short span of time? Let's look at what has influenced 
          responsive design's sky-rocketing growth and how it is shaping the 
          design industry. This blog deep dives into the various aspects of 
          responsive web design and appeals to a universal audience 
          (irrespective of your technical know-how). Since websites are
           something that every person can relate to, I hope everyone 
           can relate to this post too! Let’s start with a brief section
           about responsive web design!`,
    headTwo: "What Is  Responsive Web Design?",
    paragraphTwo: `Responsive web design, also known as RWD, 
        is a web-design strategy to automatically render the website 
        according to the screen size (or the viewport size). Thus, the 
        look and feel of the website (i.e. design, layout, and experience) 
        should remain uniform, irrespective of the device being used for
         accessing the website. 
        In reality, responsive web design is all about expanding 
        and shrinking the web page according to the screen size (or 
            viewport) on which the website is being viewed. Responsive 
            web design is extremely important in today’s times!
        
        Responsive web design depends on the user who is 
        visiting your website. For example, if I use a 12px font 
        on the bigger screen size and shrink it to mobile, it might 
        come down to 8px which is illegible. In contrast, the font size
        needs to be bigger on a small screen, the recommended font size 
        is 16 px. For mobile devices,
         the recommended font sizes are 16px and 8px.`,

    headThree: "importance Of Responsive Web Design",
    paragraphThree: `If you’re a newbie to web design, you
         might be wondering why responsive design is important.
          The answer is quite simple. It is no longer feasible to create 
          web designs for a single device. Mobile web traffic has surpassed 
          desktop traffic and now accounts 
        for more than 55 % of overall website traffic`,
  },
  {
    id: 3,
    image: picture3,
    title: `Do we really need a backend now? Can we 
                build applications without backend with Next.js 14?`,
    body: `In the rapidly evolving landscape of web development,
               the role of the backend has been a critical component for many years. However,
                with the advent of modern frameworks like Next.js 14, the question arises:
                Do we really need a Backend now? Can we build applications without backend with Next.js 14?`,
    category: "Next.js 14",
    paragraphOne: `If you know that I have been writing articles for 2 
        years or so and I have been in the software development world for
         more than 3 years and I enjoy writing and building backends more 
         than frontends! Yeah, it's true, I enjoy writing backend more than
          frontend. But with the evolving Next.js Server Components and Server
           Actions.
         Do we still need a backend? Well, in my opinion, We don't.`,
    headTwo: "Why we don't need a backend?",
    paragraphTwo: `When I say that we don't need a backend, I mean that a lot of 
    applications that we are building right now (SaaS, AI Tools, etc.) don't really 
    need a separate backend. That said, I do think that a lot of large-scale applications
     still need a custom backend, Why? `,
    headThree: "Why do we need a backend?",
    paragraphThree: `So now let's think more and talk about why we need a backend. For me, 
     it's simple that syncing a lot of data with the database and other external APIs just sucks, 
     that's why I like to have a custom backend for any 
     large-scale applications. Let's take it a step further by explaining to you with code examples.`,
    headFour: "How do you really build an application without a backend with Next.js 14?",
    ParagraphFour: `So first, How do you really build an application without a backend with Next.js 14? 
     Simply, you use a lot of third-party APIs to do so, like Clerk or Auth.js for Authentication, Stripe
      for payments, etc.,
      you integrate a database into it using Prisma, and you use tRPC to build Type-safe APIs on the fly.`,
  },
];

export default data;
