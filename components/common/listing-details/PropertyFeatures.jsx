const PropertyFeatures = ({ features, buildingDetails, isSold = false }) => {

  if (isSold || (!features && !buildingDetails)) return null;


  const getFeaturesList = () => {
    const featuresList = [];

    if (features) {
      Object.keys(features).forEach(key => {
        if (features[key] === true) {
          featuresList.push(key.replace(/_/g, ' '));
        }
      });
    }

    if (buildingDetails) {
      if (buildingDetails.has_elevator) featuresList.push('Elevator');
      if (buildingDetails.has_garage) featuresList.push('Parking');
      if (buildingDetails.has_basement) featuresList.push('Basement');
    }

    return featuresList;
  };

  const featuresList = getFeaturesList();


  if (featuresList.length === 0) return null;

  return (
      <div className="property-features-grid">
        {featuresList.map((feature, index) => (
            <div className="feature-item" key={index}>
              <span className="flaticon-tick"></span> {feature}
            </div>
        ))}

        <style jsx>{`
        .property-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
          width: 100%;
        }
        .feature-item {
          padding: 5px 0;
        }
      `}</style>
      </div>
  );
};

export default PropertyFeatures;