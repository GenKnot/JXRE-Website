const AdditionalDetails = ({ buildingDetails }) => {
  if (!buildingDetails) return null;

  return (
      <>
        <div className="col-md-6 col-lg-6">
          <ul className="list-inline-item">
            {buildingDetails.zoning && (
                <li>
                  <p>
                    Zoning : <span>{buildingDetails.zoning}</span>
                  </p>
                </li>
            )}
            {buildingDetails.heating_type && (
                <li>
                  <p>
                    Heating Type : <span>{buildingDetails.heating_type}</span>
                  </p>
                </li>
            )}
            {buildingDetails.hot_water_type && (
                <li>
                  <p>
                    Hot Water Type : <span>{buildingDetails.hot_water_type}</span>
                  </p>
                </li>
            )}
          </ul>
        </div>
        <div className="col-md-6 col-lg-6">
          <ul className="list-inline-item">
            {buildingDetails.has_elevator !== undefined && (
                <li>
                  <p>
                    Elevator : <span>{buildingDetails.has_elevator ? 'Yes' : 'No'}</span>
                  </p>
                </li>
            )}
            {buildingDetails.has_basement !== undefined && (
                <li>
                  <p>
                    Basement : <span>{buildingDetails.has_basement ? 'Yes' : 'No'}</span>
                  </p>
                </li>
            )}
            {buildingDetails.heating_responsibility && (
                <li>
                  <p>
                    Heating Responsibility : <span>{buildingDetails.heating_responsibility}</span>
                  </p>
                </li>
            )}
          </ul>
        </div>
      </>
  );
};

export default AdditionalDetails;