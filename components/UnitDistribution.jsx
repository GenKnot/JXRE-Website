const UnitDistribution = ({ unitDistribution }) => {
    if (!unitDistribution) return null;

    // Check if there are any units to display
    const hasUnits = Object.values(unitDistribution).some(value => value > 0);

    if (!hasUnits) return null;

    // Format the distribution labels
    const distributionLabels = {
        studio: "Studio",
        one_half: "1½",
        two_half: "2½",
        three_half: "3½",
        four_half: "4½",
        five_half: "5½",
        six_plus: "6½+"
    };

    // Filter to only include unit types that have at least 1 unit
    const unitTypes = Object.entries(unitDistribution)
        .filter(([_, count]) => count > 0)
        .map(([type, count]) => ({
            type: distributionLabels[type] || type,
            count
        }));

    return (
        <div className="property_amenities">
            <h4 className="mb30">Unit Distribution</h4>
            <div className="row">
                {unitTypes.map((unit, index) => (
                    <div className="col-sm-6 col-md-6 col-lg-4" key={index}>
                        <div className="amenity_wrapper">
                            <div className="amenity_container text-center">
                                <div className="amenity_icon">
                                    <span className="flaticon-house"></span>
                                </div>
                                <div className="amenity_content">
                                    <h5>{unit.type}</h5>
                                    <p>{unit.count} Units</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnitDistribution;