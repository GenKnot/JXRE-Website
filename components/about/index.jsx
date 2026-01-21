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
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    I focus on multifamily investment and asset management, serving Toronto and key markets across Ontario, with extensive hands-on experience in Quebec.
                                </p>
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    For over a decade, I have worked with property owners and sophisticated investors on multifamily acquisitions, financing structures, and long-term hold strategies. I also personally own and operate multiple rental properties, which provides a practical, owner-level understanding of operations, financing, and cash flow.
                                </p>
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    My work centers on long-term asset stability and structural optimization rather than short-term transactions, with an emphasis on building thoughtful, long-term professional relationships.
                                </p>
                                <hr className="my-4" />
                                <p className="mb-4 text-muted" style={{lineHeight: '1.8', fontSize: '15px'}}>
                                    我专注于多户住宅（Multifamily）投资与资产管理，服务范围涵盖多伦多及安省核心市场，并在魁北克市场拥有多年实操经验。
                                </p>
                                <p className="mb-4 text-muted" style={{lineHeight: '1.8', fontSize: '15px'}}>
                                    过去十余年中，我为业主与投资人提供多户住宅的收购、融资结构设计及长期持有规划服务。同时，我本人亦长期持有并运营多套出租物业，对多户住宅的管理、融资与现金流有深入的一线理解。
                                </p>
                                <p className="mb-0 text-muted" style={{lineHeight: '1.8', fontSize: '15px'}}>
                                    我更关注资产的长期稳定性与结构优化，而非短期交易结果，并致力于与业主建立理性、长期的专业合作关系。
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
