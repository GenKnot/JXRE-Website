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
                                    Julie Xu is the Founder and President of JXRE, a multifamily-focused investment advisory platform serving Toronto and key markets across Ontario, with deep operational experience in Québec.
                                </p>
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    With over a decade of experience in the multifamily sector, Julie has advised property owners and sophisticated investors on acquisitions, financing structures, and long-term hold strategies. In parallel, she is an active investor and owner-operator of multiple rental properties, giving her a practical, owner-level understanding of operations, financing, and cash flow management.
                                </p>
                                <p className="mb-4" style={{lineHeight: '1.8', fontSize: '16px'}}>
                                    Julie's work emphasizes long-term asset stability and structural optimization rather than short-term transactions. She focuses on building thoughtful, durable professional relationships with investors who value discipline, execution, and long-term alignment.
                                </p>
                                <hr className="my-4" />
                                <p className="mb-4 text-muted" style={{lineHeight: '1.8', fontSize: '15px'}}>
                                    Julie Xu 是 JXRE 创始人兼总裁，持有魁北克省及安大略省房地产经纪牌照，专注于 Multifamily 投资与资产管理，服务范围覆盖多伦多及安省核心市场，并在魁北克市场拥有多年一线实操经验。
                                </p>
                                <p className="mb-4 text-muted" style={{lineHeight: '1.8', fontSize: '15px'}}>
                                    过去十余年中，Julie 持续为业主及专业投资人提供 Multifamily 资产的收购咨询、融资结构设计及长期持有规划服务。同时，她本人亦长期持有并直接运营多套 Multifamily 出租物业，对资产运营、融资安排及现金流管理具备扎实而深入的实务理解。
                                </p>
                                <p className="mb-0 text-muted" style={{lineHeight: '1.8', fontSize: '15px'}}>
                                    Julie 的工作重点在于 Multifamily 资产的长期稳定性与结构优化，而非短期交易结果，致力于与投资人建立理性、长期、可持续的专业合作关系。
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
