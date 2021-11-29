import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';


const projects = [
    {
      title: "Rapid Z-CAR",
      subtitle: "MERN Stack",
      description:
        "Ecommerce Based on online Car Shops,users can order cars with necessary Information",
      image: "https://imgshare.io/images/2021/11/29/rapid.png",
      link: "https://car-shop-authorization.web.app/home",
    },
    {
      title: "Tourism Packers",
      subtitle: "MERN Stack",
      description:
        "Tourism packers are mainly based on Tour planners. lots of places, and focused on real users.",
      image:"https://imgshare.io/images/2021/11/29/tour.png",
      link: "https://tourism-558cf.web.app/home",
    },
    {
      title: "Doctors Point",
      subtitle: "React and Firebase",
      description:
        "Based on Doctor's Appointment and Hospitality Services Firebase Authentication systemResponsive UI",
      image: "https://imgshare.io/images/2021/11/29/doctor.png",
      link: "https://doctors-point-df386.web.app/",
    },
    {
      title: "School of Arts",
      subtitle: "React Hooks",
      description:
        "Based on Simple Educational website Used by React Hook, React Router,Bootstrap",
      image: "https://imgshare.io/images/2021/11/29/soa.png",
      link: "https://awesome-kilby-09b98b.netlify.app/home",
    },
  ];

const Projects = () => {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
          <CodeIcon  className="mx-auto inline-block w-20 mb-4 h-20" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
               target="_blank"
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4 " data-aos="zoom-out-up" rel="noreferrer">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100" >
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;