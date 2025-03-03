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

const Index = () => {
    return (
        <>
            {/* <!-- Main Header Nav --> */}
            <Header/>

            {/* <!--  Mobile Menu --> */}
            <MobileMenu/>

            {/* <!-- Modal --> */}
            <PopupSignInUp/>

            {/* <!-- Home Design --> */}
            <Hero/>

            {/* <!-- Feature Properties --> */}
            <section id="feature-property" className="feature-property bgc-f7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="main-title text-center mb40">
                                <h2>Featured Properties</h2>
                                <p>Exceptional multi-family investments in prime locations.</p>
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
                                <h2>Find Properties in These Cities</h2>
                                <p>Explore our curated selection of investment properties in Canada's premier real
                                    estate markets.</p>
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
                                <h2>Why Choose JXRE</h2>
                                <p>Your trusted partner for premium investment properties in Montreal and Toronto</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <WhyChoose/>
                    </div>
                </div>
            </section>

            {/* <!-- Our Blog --> */}
            <section id="new-properties" className="our-blog bgc-f7 pb30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="main-title text-center">
                                <h2>New Investment Opportunities</h2>
                                <p>Discover our latest multi-family properties with excellent income potential</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <RecentProperties/>
                    </div>
                </div>
            </section>

            {/*/!* <!-- Our Partners --> *!/*/}
            {/*<section id="our-partners" className="our-partners">*/}
            {/*  <div className="container">*/}
            {/*    <div className="row">*/}
            {/*      <div className="col-lg-6 offset-lg-3">*/}
            {/*        <div className="main-title text-center">*/}
            {/*          <h2>Our Partners</h2>*/}
            {/*          <p>We only work with the best companies around the globe</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="row">*/}
            {/*      <Partners />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

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
