import React from 'react';
import MyPDF from './Raihan-Resume.pdf';
import Typical from 'react-typical'
import mypic from './mypic.jpg';

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"  >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Raihan. 
           
              <Typical
                loop={Infinity}
                steps={[
                  "Junior Web Developer",
                  1500,
                  "Front End Developer",
                  1500,
                  "Full Stack Developer",
                  1500,
                  "MERN Stack Developer",
                  1500,
                  "React Dev Developer",
                  1500,
                ]}
              >

              </Typical>
              <br className="hidden lg:inline-block" />I love to build amazing
              apps.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href={MyPDF} download="Raihan-Resume.pdf"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Download Resume
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-up">
            <img
              className="object-cover object-center rounded-full lg:w-96 h-96 ... shadow-xl flex items-center justify-center"
              alt="hero"
              src={mypic}
            />
          </div>
        </div>
      </section>
    </div>

  );
};

export default About;