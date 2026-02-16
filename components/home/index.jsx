import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import Hero from "./Hero";
import WhyChoose from "../common/WhyChoose";
import PopupSignInUp from "../common/PopupSignInUp";
import RecentProperties from "@/components/RecentProperties";
import TestimonialSection from "@/components/TestimonialSection";
import JsonLd from "../common/JsonLd";

const Index = () => {
    return (
        <>
            <JsonLd />
            <Header/>
            <MobileMenu/>
            <PopupSignInUp/>
            <Hero/>

            {/* <!-- Feature Properties --> */}
            <section id="feature-property" className="feature-property bgc-f7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="main-title text-center mb40">
                                <h2>Portfolio Snapshot</h2>
                                <p>A selection of operating assets and completed transactions</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="feature_property_slider gutter-x15">
                                <FeaturedProperties/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Property Cities --> */}
            <section id="property-city" className="property-city pb30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="main-title text-center">
                                <h2>Core Markets</h2>
                                <p>Focus on resilient, supply-constrained rental markets</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <FindProperties/>
                    </div>
                </div>
            </section>

            {/* <!-- Why Chose Us --> */}
            <section id="why-chose" className="whychose_us pb30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="main-title text-center">
                                <h2>Resources</h2>
                                <p>Market and regulatory references for Ontario & Quebec</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <WhyChoose/>
                    </div>
                </div>
            </section>

            {/* <!-- Our Testimonials --> */}
            <section className="our-testimonials">
                <div className="container ovh">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial_slider_home9 gutter-x15">
                                <TestimonialSection />
                            </div>
                        </div>
                    </div>
                    {/* End .row */}
                </div>
                {/* End container */}
            </section>

            {/* <!-- Start Call to Action --> */}
            <section className="start-partners bgc-thm pt50 pb50">
                <div className="container">
                    <CallToAction/>
                </div>
            </section>

            {/* <!-- Our Footer --> */}
            <section className="footer_one">
                <div className="container">
                    <div className="row">
                        <Footer/>
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer Bottom Area --> */}
            <section className="footer_middle_area pt40 pb40">
                <div className="container">
                    <CopyrightFooter/>
                </div>
            </section>
        </>
    );
};

export default Index;
