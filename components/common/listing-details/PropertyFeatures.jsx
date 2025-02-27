const PropertyFeatures = ({ features, buildingDetails }) => {
  if (!features && !buildingDetails) return null;


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
      if (buildingDetails.has_garage) featuresList.push('Garage');
      if (buildingDetails.has_basement) featuresList.push('Basement');
    }

    return featuresList;
  };

  const featuresList = getFeaturesList();


  const columns = [[], [], []];
  featuresList.forEach((feature, index) => {
    columns[index % 3].push(feature);
  });

  return (
      <>
        {columns.map((column, index) => (
            <div className="col-sm-6 col-md-6 col-lg-4" key={index}>
              <ul className="order_list list-inline-item">
                {column.map((feature, i) => (
                    <li key={i}>
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