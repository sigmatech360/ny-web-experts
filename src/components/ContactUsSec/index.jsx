import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 34.0522, // Los Angeles latitude
  lng: -118.2437, // Los Angeles longitude
};

const ContactUsSec = () => {
  return (
    <section className="contact-us-sec clipedShaped-sec bg-gradiant">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="web-creation-content mb-5">
              <p className="sec-tag mb-4">Contact Us</p>
              <h2>Drop us a Line.</h2>
            </div>
            <div className="contact-us-form pe-xl-5 me-xl-5 pe-0 me-0">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone number"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <select class="form-select form-control">
                    <option selected>Select Service</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                  </select>
                </div>
                <div className="col-lg-12 mb-3  4">
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Write message"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="col-lg-12">
                  <button className="ny-btn">Send a Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
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
