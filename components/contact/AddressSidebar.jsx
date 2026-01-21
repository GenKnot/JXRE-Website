const AddressSidebar = () => {
    return (
        <div className="contact_localtion">
            <h4>Contact Us</h4>
            <p>
                Have questions about our properties or services? Get in touch with our team and we'll be happy to assist you.
            </p>
            <div className="content_list">
                <h5>Toronto</h5>
                <p>
                    (647)-616-9785
                    <br/>8300 Woodbine Ave, unit 500.
                    <br/>Markham, ON L3R 9Y7
                </p>
            </div>
            <div className="content_list">
                <h5>Montreal</h5>
                <p>
                    (514)-651-4588
                    <br/>9515 Boul. LaSalle, LaSalle
                    <br/>QC H8R 2M9
                </p>
            </div>
            <div className="content_list">
                <h5>Email</h5>
                <p>
                    <a href="mailto:info@jxre.ca" style={{color: '#ff5a5f', textDecoration: 'none'}}>
                        info@jxre.ca
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AddressSidebar;
