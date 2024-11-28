import React from "react";
import myPhoto from "../assets/my-photo.jpg"; // Adjust path to your photo

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Photo Section */}
        <div className="mb-8 md:mb-0 md:mr-8">
          <img
            src={myPhoto}
            alt="Imad Moujahid"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* About Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi! I'm{" "}
            <span className="text-violet-500 font-bold ">
              Imad Moujahid
            </span>
            , a passionate web developer with a love for creating functional,
            aesthetic websites. I specialize in modern web technologies and
            enjoy bringing ideas to life through clean code and innovative
            designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;