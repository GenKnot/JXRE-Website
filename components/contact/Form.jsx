'use client'

import { useState } from "react";
import { API_BASE_URL } from "../../constants/api";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 基本验证
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill out all required fields."
      });
      return;
    }

    setStatus({ ...status, submitting: true });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/general/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Your message has been sent successfully! We'll get back to you soon."
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send your message. Please try again or contact us directly."
      });
    }
  };

  return (
      <form className="contact_form" onSubmit={handleSubmit}>
        {status.success && (
            <div className="alert alert-success mb-4">
              {status.message}
            </div>
        )}

        {status.error && (
            <div className="alert alert-danger mb-4">
              {status.message}
            </div>
        )}

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
              />
            </div>
          </div>


          <div className="col-sm-12">
            <div className="form-group">
            <textarea
                className="form-control"
                rows="6"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            </div>

            <div className="form-group mb0">
              <button type="submit" className="btn btn-lg btn-thm" disabled={status.submitting}>
                {status.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </form>
  );
};

export default Form;