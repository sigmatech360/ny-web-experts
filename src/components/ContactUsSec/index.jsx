import React, { useState } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 34.0522, // Los Angeles latitude
  lng: -118.2437, // Los Angeles longitude
};

const servicesList = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Video Animation" },
  { id: 3, name: "UI/UX Design" },
  { id: 4, name: "Content Writing" },
  { id: 5, name: "Logo Design" },
];

const ContactUsSec = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    service_1: "",
    data_message: "",
  });

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/submit-query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      alert("Form Submitted Successfully");
      
      setFormData({
        username: "",
        email: "",
        phone: "",
        service_1: "",
        data_message: "",
      })
    } catch (error) {
      console.log(`Error submitting form:`, error);
      alert("Submission failed. Please try again.");
    }
  }; 

  return (
    <section
      className={`contact-us-sec clipedShaped-sec bg-gradiant contact-us-sec-${props.variant} ${props.className}`}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mb-lg-0 mb-4"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="web-creation-content mb-5">
              <p className="sec-tag mb-4">Contact Us</p>
              <h2>Drop us a Line.</h2>
            </div>
            <div className="contact-us-form pe-xl-5 me-xl-5 pe-0 me-0">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full name"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <select
                      class="form-select form-control"
                      name="service_1"
                      value={formData.service_1}
                      onChange={handleChange}
                    >
                      {servicesList.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-12 mb-3  4">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="Write message"
                      name="data_message"
                      value={formData.data_message}
                      onChange={handleChange}
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button className="ny-btn">Send a Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="contact-us-map-content">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={defaultCenter}
                  zoom={12}
                >
                  <Marker position={defaultCenter} />
                </GoogleMap>
              </LoadScript>
              <div className="contact-us-map-content-text">
                <h1>Call us anytime: (713) 347-2269</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSec;
