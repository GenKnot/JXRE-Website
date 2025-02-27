const PropertyItem = ({ property }) => {
    if (!property) return null;

    const totalUnits = property.residential_units + property.commercial_units;

    const getBedrooms = () => {
        if (!property.unit_distribution) return 'N/A';

        const distribution = property.unit_distribution;
        let total = 0;

        if (distribution.studio) total += 1 * distribution.studio;
        if (distribution.one_half) total += 1 * distribution.one_half;
        if (distribution.two_half) total += 2 * distribution.two_half;
        if (distribution.three_half) total += 3 * distribution.three_half;
        if (distribution.four_half) total += 4 * distribution.four_half;
        if (distribution.five_half) total += 5 * distribution.five_half;
        if (distribution.six_plus) total += 6 * distribution.six_plus;

        return total;
    };

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

            {property.residential_units && (
                <li className="list-inline-item">
                    <a href="#">Residential Units: {property.residential_units}</a>
                </li>
            )}

            {property.commercial_units && (
                <li className="list-inline-item">
                    <a href="#">Commercial Units: {property.commercial_units}</a>
                </li>
            )}

            {property.unit_distribution && (
                <li className="list-inline-item">
                    <a href="#">Bedrooms: {getBedrooms()}</a>
                </li>
            )}

            {property.building_details?.lot_area && (
                <li className="list-inline-item">
                    <a href="#">Area: {property.building_details.lot_area} sq ft</a>
                </li>
            )}
        </ul>
    );
};

export default PropertyItem;