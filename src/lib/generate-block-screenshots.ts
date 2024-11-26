import http from "http";
import https from "https";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const protocol = url.startsWith("https") ? https : http;

const apiUrl = `${url}/api/blocks/generate-screenshots?secretKey=${process.env.SCREENSHOT_GENERATION_SECRET_KEY}`;

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

// Make the POST request
const generateBlockScreenshots = () => {
  const req = protocol.request(apiUrl, options);

  // Handle errors
  req.on("error", (error) => {
    console.error("Request Error:", error);
  });

  // End the request
  req.end();
};

// Call the function
generateBlockScreenshots();
