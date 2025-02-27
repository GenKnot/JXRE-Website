const WhatsNearby = ({ locations }) => {
    if (!locations || locations.length === 0) return null;

    // Group locations by location_type
    const locationsByType = locations.reduce((acc, location) => {
        const type = location.location_type.name;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(location);
        return acc;
    }, {});

    // If no location groups, don't render the component
    if (Object.keys(locationsByType).length === 0) return null;

    // Map of location type to icon class
    const locationTypeIcons = {
        'Education': 'flaticon-college-graduation',
        'School': 'flaticon-college-graduation',
        'University': 'flaticon-college-graduation',
        'Healthcare': 'flaticon-heartbeat',
        'Hospital': 'flaticon-heartbeat',
        'Medical': 'flaticon-heartbeat',
        'Health & Medical': 'flaticon-heartbeat',
        'Transportation': 'flaticon-front-of-bus',
        'Bus Station': 'flaticon-front-of-bus',
        'Subway': 'flaticon-front-of-bus',
        'Train': 'flaticon-front-of-bus',
        'Airport': 'flaticon-plane',
        'Restaurant': 'flaticon-food',
        'Dining': 'flaticon-food',
        'Cafe': 'flaticon-food',
        'Shopping': 'flaticon-shopping',
        'Supermarket': 'flaticon-shopping',
        'Mall': 'flaticon-shopping',
        'Entertainment': 'flaticon-theatre',
        'Park': 'flaticon-green-park-city-space',
        'Recreation': 'flaticon-green-park-city-space',
        'Gym': 'flaticon-weightlifting',
        'Fitness': 'flaticon-weightlifting',
        'Bank': 'flaticon-coin',
        'ATM': 'flaticon-coin',
        // Add more mappings as needed
    };

    // Get style class based on location type
    const getStyleClass = (type, index) => {
        const styles = ['', 'style2', 'style3', 'style4', 'style5'];
        // Try to get consistent styling for the same location types
        const styleIndex = Object.keys(locationsByType).indexOf(type) % styles.length;
        return styles[styleIndex];
    };

    // Get icon based on location type
    const getIcon = (type) => {
        return locationTypeIcons[type] || 'flaticon-placeholder';
    };

    return (
        <>
            {Object.entries(locationsByType).map(([locationType, locationsList], index) => (
                <div className={`education_distance mb15 ${getStyleClass(locationType, index)}`} key={locationType}>
                    <h5>
                        <span className={getIcon(locationType)}></span> {locationType}
                    </h5>

                    {locationsList.map((location) => (
                        <div className="single_line" key={location.id}>
                            <p className="para">
                                {location.name}
                                {location.distance && <span> ({location.distance})</span>}
                            </p>
                            {location.notes && (
                                <p className="details">{location.notes}</p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default WhatsNearby;