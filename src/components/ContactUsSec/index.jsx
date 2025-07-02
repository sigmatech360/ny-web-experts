import React, { useState } from "react";
import { toast } from "react-toastify";


const ContactUsSec = (props) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

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
      // toast.success("Form Submitted Successfully");

      if (result.status) {
        toast.success(result.message);
        setFormData({
          username: "",
          email: "",
          phone: "",
          service_1: "",
          data_message: "",
        });
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      console.log(`Error submitting form:`, error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
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
              <p className="sec-tag mb-4">{props.secTag || `Contact Us`}</p>
              <h3>{props.secTitle || `Drop us a Line.`}</h3>
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
                      required
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
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <select
                      class="form-select form-control"
                      name="service_1"
                      value={formData.service_1}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Services
                      </option>
                      <option value="web-design-development">Web Design And Development</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="cms-development">CMS Development</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="social-media-marketing">
                        Social Media Marketing
                      </option>
                      <option value="seo">SEO</option>
                      <option value="custom-development">
                        Custom Development
                      </option>
                      <option value="mobile-app-development">
                        Mobile App Development
                      </option>
                      
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
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button
                      className="ny-btn"
                      disabled={loading}
                      style={{
                        opacity: loading ? 0.3 : 1,
                      }}
                    >
                      {/* Send a Message */}
                      {loading ? "Submitting..." : "Send a Message"}
                    </button>
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
              {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={defaultCenter}
                  zoom={12}
                >
                  <Marker position={defaultCenter} />
                </GoogleMap>
              </LoadScript> */}
              <div style={{ width: "100%", height: "100%" }}>
                <iframe
                  title="California Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2742347859!2d-118.69193073579997!3d34.02073048963344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b2c3b4a3f3%3A0xbaa14b7faeb7bc01!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1648454754173!5m2!1sen!2sin"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13236.436185047787!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716200000000!5m2!1sen!2sus"
                ></iframe>
              </div>
              <div className="contact-us-map-content-text">
                <h1>Call us anytime: +1 (917) 722-0955 </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSec;
