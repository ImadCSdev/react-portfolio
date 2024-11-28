import React from "react";
// import AnimatedStats from "./AnimatedStats";

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-semibold">Front-end</h3>
            <p className="mt-4 text-lg">JavaScript, Next.js, Tailwind CSS, TypeScript, React</p>
          </div>

          {/* Skill 2 */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-semibold">Back-end</h3>
            <p className="mt-4 text-lg">Node.js, WebSockets, Docker</p>
          </div>

          {/* Skill 3 */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-semibold">Database</h3>
            <p className="mt-4 text-lg">MySQL, MongoDB</p>
          </div>
        </div>

        {/* Add Animated Stats below
        <div className="mt-12">
          <AnimatedStats />
        </div> */}
      </div>
    </section>
  );
};

export default Skills;