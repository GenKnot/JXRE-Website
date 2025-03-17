'use client'

import { useState } from 'react';
import { API_BASE_URL } from '@/constants/api';

const TestimonialModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        content: '',
        rating: 5
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.content) {
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
            const response = await fetch(`${API_BASE_URL}/api/testimonials/submit/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Failed to submit testimonial");
            }

            const data = await response.json();

            setStatus({
                submitting: false,
                success: true,
                error: false,
                message: data.message
            });


            setFormData({
                name: '',
                content: '',
                rating: 5
            });


            setTimeout(() => {
                onClose();
                setStatus({
                    submitting: false,
                    success: false,
                    error: false,
                    message: ''
                });
            }, 3000);

        } catch (error) {
            console.error("Error submitting testimonial:", error);
            setStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Failed to submit your testimonial. Please try again."
            });
        }
    };


    const renderStarInput = () => {
        return (
            <div className="rating-select mb-4">
                <label className="form-label fw-semibold">Your Rating</label>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map(num => (
                        <span
                            key={num}
                            className={`star-btn ${Number(formData.rating) >= num ? 'active' : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, rating: num }))}
                        >
              <i className="fa fa-star"></i>
            </span>
                    ))}
                </div>
            </div>
        );
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal testimonial-modal fade show"
                 style={{ display: 'block' }}
                 tabIndex="-1"
                 role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Share Your Experience</h5>
                            <button
                                type="button"
                                className="close-btn"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            {status.success ? (
                                <div className="success-message">
                                    <div className="success-icon">
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <h4>Thank You!</h4>
                                    <p>{status.message}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {status.error && (
                                        <div className="alert alert-error">
                                            <i className="fa fa-exclamation-circle me-2"></i>
                                            {status.message}
                                        </div>
                                    )}

                                    <div className="form-group mb-4">
                                        <label htmlFor="name" className="form-label fw-semibold">Your Name*</label>
                                        <input
                                            type="text"
                                            className="form-control modern-input"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {renderStarInput()}

                                    <div className="form-group mb-4">
                                        <label htmlFor="content" className="form-label fw-semibold">Your Review*</label>
                                        <textarea
                                            className="form-control modern-textarea"
                                            id="content"
                                            name="content"
                                            placeholder="Tell us about your experience..."
                                            rows="4"
                                            value={formData.content}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="submit-wrapper">
                                        <button
                                            type="submit"
                                            className="btn btn-submit"
                                            disabled={status.submitting}
                                        >
                                            {status.submitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    <span>Submitting...</span>
                                                </>
                                            ) : (
                                                'Submit Review'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default TestimonialModal;