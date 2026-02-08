import Image from "next/image";
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

            <section className="our-about pb0 pt85 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="mb-4">About JXRE</h2>
                            <p className="mb-0">Strategic Multifamily Investment Advisory</p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <div className="about-img text-center">
                                <Image
                                    src="/1.jpg"
                                    alt="JXRE Founder"
                                    width={400}
                                    height={500}
                                    className="rounded shadow img-fluid"
                                    style={{objectFit: 'cover', maxWidth: '100%', height: 'auto'}}
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="about-content">
                                <h3 className="mb-2 text-start">Julie Xu</h3>
                                <p className="text-muted mb-1" style={{fontSize: '15px'}}>Founder & President, JXRE</p>
                                <p className="text-muted mb-4" style={{fontSize: '15px'}}>Licensed Real Estate Broker — Québec & Ontario</p>
                                
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    Julie Xu is the Founder and President of JXRE, an investment platform focused on acquiring and optimizing institutional-grade multifamily assets across Canada's core markets.
                                </p>
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    Operating at the intersection of capital and real estate, Julie advises investors strategically while also acting as a principal in her own transactions. This distinct positioning informs her ownership-driven approach to asset selection, financing strategy, and long-term value creation.
                                </p>
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    Her investment philosophy prioritizes structural resilience over cyclical opportunity, emphasizing disciplined leverage and operational excellence to achieve compounding growth.
                                </p>
                                <p className="mb-0" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    Julie partners selectively with investors who maintain a long-term orientation and a commitment to rational decision-making and high-quality execution, building relationships defined by depth, alignment, and durability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt100 pb50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4 className="mb-3">Ready to explore multifamily investment?</h4>
                            <a href="/contact" className="btn btn-thm btn-lg">
                                Start a Thoughtful Conversation
                            </a>
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
