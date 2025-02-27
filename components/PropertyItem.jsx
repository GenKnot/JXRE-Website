const PropertyItem = ({ property }) => {
    if (!property) return null;

    return (
        <ul className="mb0">
            {property.residential_units > 0 && (
                <li className="list-inline-item">
                    <a href="#">{property.residential_units} Residential Units</a>
                </li>
            )}

            {property.commercial_units > 0 && (
                <li className="list-inline-item">
                    <a href="#">{property.commercial_units} Commercial Units</a>
                </li>
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