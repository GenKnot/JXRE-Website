const PropertyDetails = ({ property }) => {
  if (!property) return null;

  // 格式化价格
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
      <>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <ul className="list-inline-item">
            {property.id && (
                <li>
                  <p>
                    Property ID : <span>{property.id}</span>
                  </p>
                </li>
            )}
            <li>
              <p>
                Price : <span>{formatPrice(property.price)}</span>
              </p>
            </li>
            {property.building_details?.lot_area && (
                <li>
                  <p>
                    Property Size : <span>{property.building_details.lot_area} Sq Ft</span>
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
        {/* End .col */}

        <div className="col-md-6 col-lg-6 col-xl-4">
          <ul className="list-inline-item">
            <li>
              <p>
                Residential Units : <span>{property.residential_units}</span>
              </p>
            </li>
            <li>
              <p>
                Commercial Units : <span>{property.commercial_units}</span>
              </p>
            </li>
            {property.building_details?.has_garage !== undefined && (
                <li>
                  <p>
                    Garage : <span>{property.building_details.has_garage ? 'Yes' : 'No'}</span>
                  </p>
                </li>
            )}
            {property.building_details?.floors && (
                <li>
                  <p>
                    Floors : <span>{property.building_details.floors}</span>
                  </p>
                </li>
            )}
          </ul>
        </div>
        {/* End .col */}

        <div className="col-md-6 col-lg-6 col-xl-4">
          <ul className="list-inline-item">
            {property.building_details?.building_type && (
                <li>
                  <p>
                    Property Type : <span>{property.building_details.building_type}</span>
                  </p>
                </li>
            )}
            <li>
              <p>
                Property Status : <span>{property.is_sold ? 'Sold' : 'For Sale'}</span>
              </p>
            </li>
            {property.assessment_year && (
                <li>
                  <p>
                    Assessment Year : <span>{property.assessment_year}</span>
                  </p>
                </li>
            )}
            {property.cap_rate && (
                <li>
                  <p>
                    Cap Rate : <span>{property.cap_rate}%</span>
                  </p>
                </li>
            )}
          </ul>
        </div>
      </>
  );
};

export default PropertyDetails;