const AdditionalDetails = ({ buildingDetails, isSold = false }) => {

    if (isSold) {
        return (
            <div className="building-details-sold-notice">
                <p className="text-center">
                    <strong>This property has been sold.</strong> Building features information is no longer available for sold properties.
                </p>
                <style jsx>{`
          .building-details-sold-notice {
            background-color: #f8f9fa;
            border-left: 4px solid #ff5a5f;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
          }
        `}</style>
            </div>
        );
    }


    if (!buildingDetails) return null;


    const buildingFeatures = [
        { id: 'zoning', label: 'Zoning', value: buildingDetails.zoning },
        { id: 'heating-type', label: 'Heating Type', value: buildingDetails.heating_type },
        { id: 'hot-water-type', label: 'Hot Water Type', value: buildingDetails.hot_water_type },
        { id: 'elevator', label: 'Elevator', value: buildingDetails.has_elevator !== undefined ? (buildingDetails.has_elevator ? 'Yes' : 'No') : null },
        { id: 'basement', label: 'Basement', value: buildingDetails.has_basement !== undefined ? (buildingDetails.has_basement ? 'Yes' : 'No') : null },
        { id: 'heating-responsibility', label: 'Heating Responsibility', value: buildingDetails.heating_responsibility }
    ];


    const availableFeatures = buildingFeatures.filter(feature =>
        feature.value !== null && feature.value !== undefined && feature.value !== ''
    );


    if (availableFeatures.length === 0) return null;

    return (
        <div className="building-details-grid">
            {availableFeatures.map(feature => (
                <div className="detail-item" key={feature.id}>
                    <p>
                        {feature.label} : <span>{feature.value}</span>
                    </p>
                </div>
            ))}

            <style jsx>{`
                .building-details-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 15px;
                    width: 100%;
                }
                .detail-item p {
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default AdditionalDetails;