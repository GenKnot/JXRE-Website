import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Invest in Premium <span className='text-thm'> Multifamily </span> Properties</h2>
                <p className="fz18 color-white">
                    Discover high-value income properties in Quebec and Ontario's most desirable neighborhoods
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
