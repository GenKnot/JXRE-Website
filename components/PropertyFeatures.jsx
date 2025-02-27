const PropertyFeatures = ({ property }) => {
    if (!property) return null;

    // Combine features from the JSON field and building details
    const featuresList = [];

    // Add features from the features JSON field
    if (property.features && typeof property.features === 'object') {
        Object.entries(property.features).forEach(([key, value]) => {
            if (value === true) {
                featuresList.push(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
            }
        });
    }

    // Add building details as features
    const buildingDetails = property.building_details;
    if (buildingDetails) {
        if (buildingDetails.has_elevator) featuresList.push('Elevator');
        if (buildingDetails.has_garage) featuresList.push('Garage');
        if (buildingDetails.has_basement) featuresList.push('Basement');

        // Add heating type
        if (buildingDetails.heating_type) {
            featuresList.push(`${buildingDetails.heating_type} Heating`);
        }

        // Add hot water type
        if (buildingDetails.hot_water_type) {
            featuresList.push(`${buildingDetails.hot_water_type} Hot Water`);
        }

        // Add heating responsibility
        if (buildingDetails.heating_responsibility) {
            featuresList.push(`${buildingDetails.heating_responsibility === 'landlord' ? 'Landlord' : 'Tenant'} Pays Heating`);
        }
    }

    // If no features to display, don't render the component
    if (featuresList.length === 0) return null;

    // Group features into columns (3 columns)
    const columns = [[], [], []];
    featuresList.forEach((feature, index) => {
        columns[index % 3].push(feature);
    });

    return (
        <>
            {columns.map((columnFeatures, columnIndex) => (
                <div className="col-sm-6 col-md-6 col-lg-4" key={columnIndex}>
                    <ul className="order_list list-inline-item">
                        {columnFeatures.map((feature, featureIndex) => (
                            <li key={featureIndex}>
                                <span className="flaticon-tick"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default PropertyFeatures;