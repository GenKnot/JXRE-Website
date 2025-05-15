import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
      <>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
          <div className="footer_about_widget">
            <h4>JXRE</h4>
            <p>
              Specializing in premium multifamily  investment properties in Quebec and Ontario.
              Our expert team helps investors acquire high-yield income properties with financing
              solutions and rental management services.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="footer_qlink_widget">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#feature-property">Featured Properties</a>
              </li>
              <li>
                <a href="/#property-city">Provinces</a>
              </li>
              <li>
                <a href="/#why-chose">About Us</a>
              </li>
              <li>
                <a href="/#new-properties">New Properties</a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="footer_contact_widget">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@jxre.ca">info@jxre.ca</a>
              </li>
              <li>
                <a href="tel:+16476169785">Toronto: (647) 616-9785</a>
              </li>
              <li>
                <a href="tel:+15143643315">Montreal: (514) 651-4588</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="footer_social_widget">
            <h4>Subscribe to Our Newsletter</h4>
            <SubscribeForm />
          </div>
        </div>
      </>
  );
};

export default Footer;