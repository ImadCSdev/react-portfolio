import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">© 2024 Imad Moujahid. All Rights Reserved.</p>

        {/* Social Media Links */}
        <div className="mt-4">
          <a
            href="https://x.com/imad1985175" // Replace with your actual Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-lg hover:text-gray-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/imad-moujahid-55b16b334/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-lg hover:text-gray-400 transition-colors"
          >
            LinkedIn
          </a>
           
          <a
            href="https://github.com/ImadCSdev" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-lg hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;