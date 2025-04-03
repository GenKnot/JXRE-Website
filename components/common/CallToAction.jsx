import Link from "next/link";

const CallToAction = () => {
    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="start_partner tac-smd">
                    <h2>Invest In Premium Income Properties</h2>
                    <p>Generate passive income with high-yield multifamily properties. We offer financing solutions and proven rental management to maximize your ROI.</p>
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4">
                <div className="parner_reg_btn text-right tac-smd">
                    <Link href="/listing" className="btn btn-thm2">
                        All Properties
                    </Link>
                </div>
            </div>
            {/* End .col */}
        </div>
    );
};

export default CallToAction;
