import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import DetailsContent from "@/components/listing-details-v1/DetailsContent";
import Sidebar from "@/components/listing-details-v1/Sidebar";
import ListingGallery from "@/components/common/listing-details/ListingGallery";

export const metadata = {
    title: 'JXRE | Property Details',
    description:
        'Explore premium real estate listings in Montreal and Toronto. Specializing in high-value multi-plex properties with strong rental income potential. Get expert advice on investing in prime urban locations.',
};


const ListingDynamicDetailsV1 = ({params}) => {

    const id = params.id;

    return (
        <>
            {/* <!-- Main Header Nav --> */}
            <Header />

            {/* <!--  Mobile Menu --> */}
            <MobileMenu />

            {/* <!-- Listing Single Property --> */}
            <section className="listing-title-area mt85 md-mt0">
                <div className="container">
                    <ListingGallery propertyId={id} />
                </div>
            </section>

            {/* <!-- Agent Single Grid View --> */}
            <section className="our-agent-single bgc-f7 pb30-991">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <DetailsContent propertyId={id} />
                        </div>
                        {/* End details content .col-lg-8 */}

                        <div className="col-lg-4 col-xl-4">
                            <Sidebar propertyId={id} />
                        </div>
                        {/* End sidebar content .col-lg-4 */}
                    </div>
                    {/* End .row */}
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

export default ListingDynamicDetailsV1;
