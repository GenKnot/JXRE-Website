import Link from "next/link";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Ontario & Quebec <span className='text-thm'>Multifamily</span> Investment Platform</h2>
                <p className="fz18 color-white">
                    Owner-driven acquisitions. Disciplined capital. Long-term value creation.
                </p>
                <div className="mt-4">
                    <Link href="/listing" className="btn btn-thm btn-lg me-3">
                        View Portfolio
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
