'use client'

import { useState } from "react";
import { API_BASE_URL } from "@/constants/api";

const ContactForm = ({ propertyId }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        property: propertyId
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                submitting: false,
                submitted: false,
                error: "Please fill in all required fields."
            });
            return;
        }

        setStatus({
            submitting: true,
            submitted: false,
            error: null
        });

        try {
            const response = await fetch(`${API_BASE_URL}/api/contact/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit the contact form. Please try again.');
            }

            setStatus({
                submitting: false,
                submitted: true,
                error: null
            });

            // Reset form data
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
                property: propertyId
            });

            // Optional: Reload the page after successful submission
            setTimeout(() => {
              window.location.reload();
            }, 1500);

        } catch (error) {
            setStatus({
                submitting: false,
                submitted: false,
                error: error.message
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul className="sasw_list mb0">
                <li className="search_area">
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </li>

                <li className="search_area">
                    <div className="form-group mb-3">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </li>

                <li className="search_area">
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </li>

                <li className="search_area">
                    <div className="form-group mb-3">
            <textarea
                name="message"
                className="form-control"
                rows="5"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
                    </div>
                </li>

                {status.error && (
                    <li>
                        <div className="alert alert-danger">{status.error}</div>
                    </li>
                )}

                {status.submitted && (
                    <li>
                        <div className="alert alert-success">
                            Thank you! Your message has been sent successfully.
                        </div>
                    </li>
                )}

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
            </ul>
        </form>
    );
};

export default ContactForm;