import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = { name, email, message };

    try {
      const response = await fetch("https://react-portfolio-uma6.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      

      const data = await response.json(); // Parse the JSON response

      if (response.ok) {
        // If the response is successful (status code 200)
        setStatus(data.message); // Use the message from the backend
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // If there's an error status from the backend
        setStatus(data.message || 'There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 mt-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-sm ${
                status.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-white">My Blog</h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black">How I Built My Portfolio</h4>
              <p className="text-gray-500 text-sm">November 22, 2024</p>
              <p className="mt-2 text-black">
              Building my portfolio was an exciting challenge, blending my skills as a full-stack developer. I focused on using Node.js and Express.js to create a fast and reliable backend, leveraging Nodemailer to handle contact form submissions. For the front-end, I used React to build dynamic user interfaces, styled with Tailwind CSS for a modern, responsive design. I prioritized simplicity and user experience, ensuring that everything from the design to the email functionality worked seamlessly. The final product reflects my growth as a developer and my commitment to clean, efficient code.
                <span className="text-purple-600">Read more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;