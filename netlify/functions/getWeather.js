// netlify/functions/getWeather.js
const axios = require("axios");

exports.handler = async function (event, context) {
  const { city, country } = event.queryStringParameters;

  const API_KEY = process.env.WEATHER_API_KEY; // This should be set in Netlify Environment Variables

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message:
          error.response?.data?.message || "Something went wrong fetching weather.",
      }),
    };
  }
};
