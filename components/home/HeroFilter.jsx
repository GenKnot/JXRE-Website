import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Invest in Premium <span className='text-thm'> Multi-Plex</span> Properties</h2>
                <p className="fz18 color-white">
                    Discover high-value income properties in Montreal and Toronto's most desirable neighborhoods
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
