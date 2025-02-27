'use client'

import { useState } from "react";
import { API_BASE_URL } from "@/constants/api";

const ContactWithAgent = ({ propertyId }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
      // 这里替换为你的实际API端点
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          property_id: propertyId,
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Your message has been sent successfully!"
      });

      // 清空表单
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
        message: "Failed to send your message. Please try again."
      });
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        {status.success && (
            <div className="alert alert-success mb-3">
              {status.message}
            </div>
        )}

        {status.error && (
            <div className="alert alert-danger mb-3">
              {status.message}
            </div>
        )}

        <ul className="sasw_list mb0">
          <li className="search_area">
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
          </li>
          {/* End li */}

          <li className="search_area">
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
          </li>
          {/* End li */}

          <li className="search_area">
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
          </li>
          {/* End li */}

          <li className="search_area">
            <div className="form-group">
            <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="search_option_button">
              <button
                  type="submit"
                  className="btn btn-block btn-thm w-100"
                  disabled={status.submitting}
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </li>
          {/* End li */}
        </ul>
      </form>
  );
};

export default ContactWithAgent;