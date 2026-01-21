import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";

const index = () => {
    return (
        <>
            <Header />
            <MobileMenu />
            <PopupSignInUp />

            <section className="our-contact pb0 pt85 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="mb-4">Get In Touch With Us</h2>
                            <p className="mb-0">We'd love to hear from you. Contact us for any inquiries about our properties or services.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 rounded shadow-sm bg-white h-100 text-center">
                                <div className="icon mb-3">
                                    <span className="flaticon-phone-call" style={{fontSize: '48px', color: '#ff5a5f'}}></span>
                                </div>
                                <h5>Toronto</h5>
                                <p className="mb-1">
                                    <a href="tel:+16476169785" style={{color: '#ff5a5f', fontSize: '18px'}}>(647)-616-9785</a>
                                </p>
                                <p className="text-muted mb-0">
                                    <a href="https://www.google.com/maps/search/?api=1&query=8300+Woodbine+Ave+unit+500+Markham+ON+L3R+9Y7" target="_blank" rel="noopener noreferrer" style={{color: '#6c757d'}}>
                                        8300 Woodbine Ave, unit 500.<br/>Markham, ON L3R 9Y7
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 rounded shadow-sm bg-white h-100 text-center">
                                <div className="icon mb-3">
                                    <span className="flaticon-phone-call" style={{fontSize: '48px', color: '#ff5a5f'}}></span>
                                </div>
                                <h5>Montreal</h5>
                                <p className="mb-1">
                                    <a href="tel:+15146514588" style={{color: '#ff5a5f', fontSize: '18px'}}>(514)-651-4588</a>
                                </p>
                                <p className="text-muted mb-0">
                                    <a href="https://www.google.com/maps/search/?api=1&query=9515+Boul+LaSalle+LaSalle+QC+H8R+2M9" target="_blank" rel="noopener noreferrer" style={{color: '#6c757d'}}>
                                        9515 Boul. LaSalle, LaSalle<br/>QC H8R 2M9
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="p-4 rounded shadow-sm bg-white h-100 text-center">
                                <div className="icon mb-3">
                                    <span className="flaticon-email" style={{fontSize: '48px', color: '#ff5a5f'}}></span>
                                </div>
                                <h5>Email Us</h5>
                                <p className="mb-0">
                                    <a href="mailto:info@jxre.ca" style={{color: '#ff5a5f', fontSize: '18px'}}>
                                        info@jxre.ca
                                    </a>
                                </p>
                                <p className="text-muted mt-2 mb-0">We'll respond within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="h400">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178784.6221633522!2d-73.87105254241073!3d45.55748482099693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1677613248693!5m2!1sen!2sca"
                                    width="100%"
                                    height="400"
                                    style={{border:0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Montreal Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="start-partners bgc-thm pt50 pb50 mt-5">
                <div className="container">
                    <CallToAction />
                </div>
            </section>

            <section className="footer_one">
                <div className="container">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </section>

            <section className="footer_middle_area pt40 pb40">
                <div className="container">
                    <CopyrightFooter />
                </div>
            </section>
        </>
    );
};

export default index;