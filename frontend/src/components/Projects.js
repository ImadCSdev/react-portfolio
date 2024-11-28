import React from "react";
import Slider from "react-slick"; // Import the carousel library
import projectImage1 from "../assets/project1.jpg";
import projectImage2 from "../assets/project2.jpg";
import projectImage3 from "../assets/project3.jpg";
import projectImage4 from "../assets/project4.jpg";
import projectImage5 from "../assets/project5.jpg";
import projectImage6 from "../assets/project6.jpg";
import projectImage7 from "../assets/project7.jpg";
import projectImage8 from "../assets/project8.jpg";
import projectImage9 from "../assets/project9.jpg";
import projectImage10 from "../assets/project10.jpg";
import projectImage11 from "../assets/project11.jpg";
import projectImage12 from "../assets/project12.jpg";
import projectImage13 from "../assets/project13.jpg";

// Define your projects with multiple images for each project
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Social Media Application ",
      description: "Developed a full-stack social media application using React for the frontend, Node.js for the backend, and MySQL for data storage. The application allows users to create profiles, post content, follow other users, and interact with posts in real-time. This project emphasizes a responsive design, secure user authentication, and efficient data handling, providing a seamless and engaging user experience.",
      images: [projectImage1, projectImage2], // Add an array of images
    },
    {
      id: 2,
      name: "Chat Application with Socket.io",
      description: "Developed a real-time chat application utilizing Socket.io for seamless communication between users. This web-based application allows users to engage in private and group chats with live message updates and notifications. The app was designed to be scalable, ensuring smooth performance even under high traffic.",
      images: [projectImage3, projectImage4, projectImage5], // Add an array of images
    },
    {
      id: 3,
      name: "Booking Application",
      description: "Designed and developed a robust booking application leveraging React with Vite for the frontend and Node.js with MongoDB for the backend. This application provides seamless booking functionality with secure user registration, authentication, and efficient data management",
      images: [projectImage6, projectImage7, projectImage8, projectImage9], // Add an array of images
    },
    {
      id: 4,
      name: "Portfolio Website with Next.js",
      description: "Designed and developed a personal portfolio website using Next.js to showcase my skills, projects, and professional experience. The website is optimized for performance, SEO, and responsiveness, ensuring an engaging and accessible experience across all devices. It features dynamic content loading, clean navigation, and smooth transitions, providing visitors with a seamless browsing experience.",
      images: [projectImage10, projectImage11, projectImage12, projectImage13], // Add an array of images
    },
  ];

  // Slider settings for the carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show next/prev arrows
  };

  return (
    <section id="projects" className="bg-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Slider {...settings}>
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                ))}
              </Slider>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;