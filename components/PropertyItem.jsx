const PropertyItem = ({property}) => {
    if (!property) return null;

    if (property.is_sold) {
        return (
            <ul className="mb0">
                <li className="list-inline-item mb-2">
                    <a href="#">
                        {property.is_house ? "House" :
                            property.is_townhouse ? "Townhouse" :
                                property.is_condo ? "Condo" :
                                    (property.residential_units > 0 && property.commercial_units > 0) ? "Mixed Use" :
                                        property.residential_units > 0 ? 'Residential' : 'Commercial'}
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Status: <strong>SOLD</strong></a>
                </li>
            </ul>
        );
    }

    // 确定属性类型
    const getPropertyType = () => {
        if (property.is_house) return "House";
        if (property.is_townhouse) return "Townhouse";
        if (property.is_condo) return "Condo";
        if (property.residential_units > 0 && property.commercial_units > 0) return "Mixed Use";
        if (property.residential_units > 0) return "Residential";
        return "Commercial";
    };


    const getStatusDisplay = () => {
        if (property.is_sold) return "Sold";
        return property.property_status_display ||
            (property.property_status === 'for_lease' ? "For Lease" : "For Sale");
    };

    return (
        <ul className="mb0">
            <li className="list-inline-item mb-2">
                <a href="#">{getPropertyType()}</a>
            </li>

            <li className="list-inline-item">
                <a href="#">Status: {getStatusDisplay()}</a>
            </li>


            {(property.is_house || property.is_townhouse || property.is_condo) ? (
                <>
                    {property.bedrooms > 0 && (
                        <li className="list-inline-item">
                            <a href="#">Bedrooms: {property.bedrooms}</a>
                        </li>
                    )}
                    {property.bathrooms > 0 && (
                        <li className="list-inline-item">
                            <a href="#">Bathrooms: {property.bathrooms}</a>
                        </li>
                    )}
                </>
            ) : (

                <>
                    {property.residential_units > 0 && (
                        <li className="list-inline-item">
                            <a href="#">{property.residential_units} Residential {property.residential_units === 1 ? 'Unit' : 'Units'}</a>
                        </li>
                    )}

                    {property.commercial_units > 0 && (
                        <li className="list-inline-item">
                            <a href="#">Commercial: {property.commercial_units === 1 ? 'Without Property' : 'With Property'}</a>
                        </li>
                    )}
                </>
            )}

            {property.building_details?.zoning && (
                <li className="list-inline-item">
                    <a href="#">Zoning: {property.building_details.zoning}</a>
                </li>
            )}

            {property.building_details?.building_type && (
                <li className="list-inline-item">
                    <a href="#">Type: {property.building_details.building_type}</a>
                </li>
            )}

            {property.building_details?.floors > 0 && (
                <li className="list-inline-item">
                    <a href="#">Floors: {property.building_details.floors}</a>
                </li>
            )}
        </ul>
    );
};

export default PropertyItem;