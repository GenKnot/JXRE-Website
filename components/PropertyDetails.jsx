const PropertyDetails = ({ property }) => {
    if (!property) return null;

    const formatCurrency = (value) => {
        if (!value && value !== 0) return '';
        return Number(value).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    return (
        <>
            <div className="col-md-6 col-lg-6 col-xl-4">
                <ul className="list-inline-item">
                    {property.id && (
                        <li>
                            <p>
                                Property ID : <span>#{property.id}</span>
                            </p>
                        </li>
                    )}

                    <li>
                        <p>
                            Price : <span>{formatCurrency(property.price)}</span>
                        </p>
                    </li>

                    {property.cost_per_unit && (
                        <li>
                            <p>
                                Cost Per Unit : <span>{formatCurrency(property.cost_per_unit)}</span>
                            </p>
                        </li>
                    )}

                    {property.building_details?.year_built && (
                        <li>
                            <p>
                                Year Built : <span>{property.building_details.year_built}</span>
                            </p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
                <ul className="list-inline-item">
                    {property.residential_units > 0 && (
                        <li>
                            <p>
                                Residential Units : <span>{property.residential_units}</span>
                            </p>
                        </li>
                    )}

                    {property.commercial_units > 0 && (
                        <li>
                            <p>
                                Commercial Units : <span>{property.commercial_units}</span>
                            </p>
                        </li>
                    )}

                    {property.building_details?.has_garage && (
                        <li>
                            <p>
                                Garage : <span>Yes</span>
                            </p>
                        </li>
                    )}

                    {property.building_details?.has_elevator && (
                        <li>
                            <p>
                                Elevator : <span>Yes</span>
                            </p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
                <ul className="list-inline-item">
                    {property.building_details?.building_type && (
                        <li>
                            <p>
                                Property Type : <span>{property.building_details.building_type}</span>
                            </p>
                        </li>
                    )}

                    {property.building_details?.zoning && (
                        <li>
                            <p>
                                Zoning : <span>{property.building_details.zoning}</span>
                            </p>
                        </li>
                    )}

                    <li>
                        <p>
                            Property Status : <span>{property.is_sold ? "Sold" : "For Sale"}</span>
                        </p>
                    </li>

                    {property.created_at && (
                        <li>
                            <p>
                                Listed On : <span>{new Date(property.created_at).toLocaleDateString()}</span>
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default PropertyDetails;