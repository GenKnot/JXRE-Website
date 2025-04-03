const PropertyItem = ({ property }) => {
    if (!property) return null;

    if (property.is_sold) {
        return (
            <ul className="mb0">
                <li className="list-inline-item mb-2">
                    <a href="#">{property.residential_units > 0 ? 'Residential' : 'Commercial'}
                        {property.residential_units > 0 && property.commercial_units > 0 ? ' & Commercial' : ''}
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Status: <strong>SOLD</strong></a>
                </li>
            </ul>
        );
    }

    const totalUnits = property.residential_units + property.commercial_units;

    return (

        <ul className="mb0">
            <li className="list-inline-item mb-2">
                <a href="#">
                    {property.residential_units > 0 ? 'Residential' : 'Commercial'}
                    {property.residential_units > 0 && property.commercial_units > 0 ? ' & Commercial' : ''}
                </a>
            </li>
            <li className="list-inline-item">
                <a href="#">Units: {totalUnits}</a>
            </li>

            {property.residential_units > 0 && (
                <li className="list-inline-item">
                    <a href="#">{property.residential_units} Residential Units</a>
                </li>
            )}

            {property.commercial_units > 0 && (
                <li className="list-inline-item">
                    <a href="#">Commercial: {property.commercial_units === 1 ? 'Without Property' : 'With Property'}</a>
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