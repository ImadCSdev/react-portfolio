import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Component to animate the number
const AnimatedNumber = ({ endValue }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < endValue) {
        counter += 1;
        setNumber(counter);
      } else {
        clearInterval(interval);
      }
    }, 500); // Adjust the speed (50ms per step)
    return () => clearInterval(interval);
  }, [endValue]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold"
    >
      <span>+{number}</span> {/* Display the number with a "+" */}
    </motion.div>
  );
};

// AnimatedStats Component
const AnimatedStats = () => {
  return (
    <div className="flex justify-around items-center">
      {/* Projects Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold">Projects</h2>
        <AnimatedNumber endValue={10} /> {/* Projects number */}
      </div>
      
      {/* Years Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold">Years</h2>
        <AnimatedNumber endValue={2} /> {/* Years number */}
      </div>
    </div>
  );
};

export default AnimatedStats;