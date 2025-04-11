import Image from "next/image";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import AddressSidebar from "./AddressSidebar";
import Form from "./Form";

const index = () => {
    return (
        <>
            {/* <!-- Main Header Nav --> */}
            <Header />

            {/* <!--  Mobile Menu --> */}
            <MobileMenu />

            {/* <!-- Modal --> */}
            <PopupSignInUp />

            {/* <!-- Contact Section --> */}
            <section className="our-contact pb0 pt85 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="mb-4">Get In Touch With Us</h2>
                            <p className="mb-0">We'd love to hear from you. Contact us for any inquiries about our properties or services.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7 col-xl-8">
                            <div className="form_grid p-4 rounded shadow-sm bg-white">
                                <h4 className="mb-4">Send Us A Message</h4>
                                <Form />
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-5 col-xl-4">
                            <div className="p-4 rounded shadow-sm bg-white">
                                <AddressSidebar />
                            </div>
                        </div>
                    </div>
                    {/* End .row */}


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
                {/* End .container */}
            </section>

            {/* <!-- Start Call to Action --> */}
            <section className="start-partners bgc-thm pt50 pb50 mt-5">
                <div className="container">
                    <CallToAction />
                </div>
            </section>

            {/* <!-- Our Footer --> */}
            <section className="footer_one">
                <div className="container">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer Bottom Area --> */}
            <section className="footer_middle_area pt40 pb40">
                <div className="container">
                    <CopyrightFooter />
                </div>
            </section>
        </>
    );
};

export default index;