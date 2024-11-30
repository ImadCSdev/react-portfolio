const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const validator = require('validator');
const morgan = require('morgan');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://react-portfolio-uma6.onrender.com",  // Specify your frontend URL
  methods: "GET,POST",  // Allow necessary HTTP methods
  allowedHeaders: "Content-Type",  // Allow content type headers
}));
   // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(morgan('combined')); // Log HTTP requests

// Rate Limiting: Prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per window
  message: "Too many requests from this IP, please try again later.",
});
app.use('/send-email', limiter);

// Set up Nodemailer transporter (using environment variables)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

// Verify the transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Error with transporter:", error);
  } else {
    console.log("Transporter is ready to send messages!");
  }
});

// Handle form submission
 
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  // Prepare email content
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Email error:", err);
      return res.status(500).json({ message: 'Error sending email.' });
    }
    res.status(200).json({ message: 'Email sent successfully.' });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});