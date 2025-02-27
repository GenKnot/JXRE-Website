const AdditionalDetails = ({ property }) => {
    if (!property) return null;

    // Check if there are any additional details to show
    const hasFinancialDetails = property.revenue ||
        property.cap_rate ||
        property.grm ||
        property.nrm ||
        property.roi;

    const hasAssessmentDetails = property.assessment_year ||
        property.land_value ||
        property.building_value ||
        property.total_value;

    // If no additional details, don't render the component
    if (!hasFinancialDetails && !hasAssessmentDetails) {
        return null;
    }

    const formatCurrency = (value) => {
        if (!value && value !== 0) return '';
        return Number(value).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    const formatPercent = (value) => {
        if (!value && value !== 0) return '';
        return `${value}%`;
    };

    return (
        <>
            <div className="col-md-6 col-lg-6">
                <ul className="list-inline-item">
                    {property.revenue && (
                        <li>
                            <p>
                                Annual Revenue : <span>{formatCurrency(property.revenue)}</span>
                            </p>
                        </li>
                    )}

                    {property.cap_rate && (
                        <li>
                            <p>
                                CAP Rate : <span>{formatPercent(property.cap_rate)}</span>
                            </p>
                        </li>
                    )}

                    {property.grm && (
                        <li>
                            <p>
                                Gross Rent Multiplier : <span>{property.grm}</span>
                            </p>
                        </li>
                    )}

                    {property.nrm && (
                        <li>
                            <p>
                                Net Rent Multiplier : <span>{property.nrm}</span>
                            </p>
                        </li>
                    )}

                    {property.roi && (
                        <li>
                            <p>
                                ROI : <span>{formatPercent(property.roi)}</span>
                            </p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="col-md-6 col-lg-6">
                <ul className="list-inline-item">
                    {property.assessment_year && (
                        <li>
                            <p>
                                Assessment Year : <span>{property.assessment_year}</span>
                            </p>
                        </li>
                    )}

                    {property.land_value && (
                        <li>
                            <p>
                                Land Value : <span>{formatCurrency(property.land_value)}</span>
                            </p>
                        </li>
                    )}

                    {property.building_value && (
                        <li>
                            <p>
                                Building Value : <span>{formatCurrency(property.building_value)}</span>
                            </p>
                        </li>
                    )}

                    {property.total_value && (
                        <li>
                            <p>
                                Total Value : <span>{formatCurrency(property.total_value)}</span>
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default AdditionalDetails;