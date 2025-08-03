import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Background from "./Background";
import axios from "axios";

export default function Navbar(props) {
  const [wdata, setWdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const city = useRef(null);
  const country = useRef(null);

  const handleCity = async (e) => {
    e.preventDefault();
    const cityValue = city.current.value.trim();
    const countryValue = country.current.value.trim();

    if (!cityValue || !countryValue) {
      props.showAlert("Please enter both city and country code", "danger");
      return;
    }

    try {
      setLoading(true);
      // ✅ Axios calling Netlify Function
      const response = await axios.get(`/.netlify/functions/getWeather`, {
        params: {
          city: cityValue,
          country: countryValue,
        },
      });

      setWdata([response.data]);
    } catch (error) {
      props.showAlert(
        error.response?.data?.message || "Please Enter Valid Data.",
        "danger"
      );
      setWdata([]);
    }

    setLoading(false);
    city.current.value = "";
    country.current.value = "";
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid flex-column flex-md-row justify-content-between align-items-center">
          <Link className="navbar-brand px-4 fw-bold" to="/">
            Nac's Weather
          </Link>
          <form
            className="d-flex flex-column flex-sm-row w-100 gap-md-0 gap-2 px-3"
            role="search"
            onSubmit={handleCity}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter City"
              aria-label="City"
              ref={city}
            />
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter Country Code (e.g., IN)"
              aria-label="Country"
              ref={country}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Background wdata={wdata} loading={loading} city={city} />
    </>
  );
}
