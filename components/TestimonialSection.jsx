'use client'

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/constants/api';
import TestimonialCard from './TestimonialCard';
import TestimonialModal from './TestimonialModal';

const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/testimonials/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="our-testimonials py-80">
            <div className="container">
                <div className="testimonial-header mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="main-title">
                                <h2 className="mb-2">What Our Clients Say</h2>
                                <p className="subtitle mb-0">Real experiences from our valued customers</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                            <button
                                className="btn btn-thm px-4 py-2 rounded-pill shadow-sm"
                                onClick={openModal}
                            >
                                <i className="fa fa-pencil me-2"></i>
                                Share Your Experience
                            </button>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="loading-container py-5 text-center">
                        <div className="spinner-container">
                            <div className="spinner-border text-thm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <p className="mt-3 text-muted">Loading testimonials...</p>
                    </div>
                ) : (
                    <div className="testimonial-container">
                        {testimonials.length > 0 ? (
                            <div className="row">
                                {testimonials.map((testimonial) => (
                                    <div className="col-md-6 col-lg-4 mb-4" key={testimonial.id}>
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-testimonials text-center py-5">
                                <div className="empty-icon mb-3">
                                    <i className="fa fa-comment-o fa-3x text-muted"></i>
                                </div>
                                <h4>No reviews yet</h4>
                                <p className="text-muted mb-4">Be the first to share your experience with us!</p>
                                <button
                                    className="btn btn-outline-thm px-4 py-2"
                                    onClick={openModal}
                                >
                                    Write a Review
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <TestimonialModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default TestimonialSection;