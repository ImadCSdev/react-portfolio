import React from "react";
import StatsSection from "./components/AnimatedStats.js"; // Import the new StatsSection component

import Header from "./components/Header";
  import About from "./components/About.js";
  import Footer from "./components/Footer.js";
  import Skills from "./components/Skills.js";
  import Contact from "./components/Contact.js";
  import Projects from "./components/Projects.js";

 

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <StatsSection /> {/* Add this to your layout */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;