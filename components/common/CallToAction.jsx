import Link from "next/link";

const CallToAction = () => {
    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="start_partner tac-smd">
                    <h2>Own Multifamily. Build Long-Term Value</h2>
                    <p>We transact directly and discreetly, with an owner's mindset and institutional execution.</p>
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4">
                <div className="parner_reg_btn text-right tac-smd">
                    <Link href="/contact" className="btn btn-thm2">
                        Contact Us
                    </Link>
                </div>
            </div>
            {/* End .col */}
        </div>
    );
};

export default CallToAction;
