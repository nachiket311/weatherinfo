function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      <div className="container">
        <p className="mb-1">© 2025 Nac's Weather App</p>
        <p className="mb-0" style={{ fontSize: "0.9rem" }}>
          Weather data provided by{" "}
          <a
            href="https://openweathermap.org/"
            className="text-decoration-none text-info hover-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenWeatherMap
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
