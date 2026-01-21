import Link from "next/link";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Strategic <span className='text-thm'>Multifamily</span> Investment Advisory</h2>
                <p className="fz18 color-white">
                    Focused on long-term value, structure, and stability across Ontario and Quebec.
                </p>
                <div className="mt-4">
                    <Link href="/listing" className="btn btn-thm btn-lg me-3">
                        View Properties
                    </Link>
                    <Link href="/contact" className="btn btn-lg hero-contact-btn">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroFilter;
