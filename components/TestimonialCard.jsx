const TestimonialCard = ({ testimonial }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fa fa-star ${i <= rating ? 'text-warning' : 'text-muted'}`}
                    aria-hidden="true"
                ></i>
            );
        }
        return stars;
    };


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="testimonial-card h-100">
            <div className="card h-100">
                <div className="card-body d-flex flex-column">
                    <div className="testimonial-header mb-3">
                        <div className="testimonial-rating mb-2">
                            {renderStars(testimonial.rating)}
                        </div>
                        <h5 className="card-title">{testimonial.name}</h5>
                    </div>

                    <div className="quote-icon mb-2">
                        <i className="fa fa-quote-left text-thm-light"></i>
                    </div>

                    <p className="card-text flex-grow-1">{testimonial.content}</p>

                    <div className="testimonial-footer mt-3 pt-2 border-top">
                        <div className="testimonial-date">
                            {formatDate(testimonial.created_at)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;