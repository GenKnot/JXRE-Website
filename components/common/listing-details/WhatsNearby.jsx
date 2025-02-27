const WhatsNearby = ({ locations }) => {
  if (!locations || locations.length === 0) return null;


  const groupedLocations = {};
  locations.forEach(location => {
    const typeName = location.location_type.name;
    if (!groupedLocations[typeName]) {
      groupedLocations[typeName] = {
        id: location.location_type.id,
        name: typeName,
        order: location.location_type.order,
        items: []
      };
    }
    groupedLocations[typeName].items.push(location);
  });


  const locationTypes = Object.values(groupedLocations).sort((a, b) => a.order - b.order);


  const styleClasses = ["", "style2", "style3"];
  const iconClasses = {
    "School": "flaticon-college-graduation",
    "Hospital": "flaticon-heartbeat",
    "Transportation": "flaticon-front-of-bus",
    "Restaurant": "flaticon-food",
    "Shopping": "flaticon-shopping-bag",
    "Park": "flaticon-park",
    "default": "flaticon-building"
  };

  return (
      <>
        {locationTypes.map((type, index) => {
          const styleClass = styleClasses[index % styleClasses.length];
          const iconClass = iconClasses[type.name] || iconClasses.default;

          return (
              <div className={`education_distance mb15 ${styleClass}`} key={type.id}>
                <h5>
                  <span className={iconClass}></span> {type.name}
                </h5>

                {type.items.map((item) => (
                    <div className="single_line" key={item.id}>
                      <p className="para">
                        {item.name} {item.distance && <span>({item.distance})</span>}
                      </p>
                      {item.notes && (
                          <p className="details">{item.notes}</p>
                      )}
                    </div>
                ))}
              </div>
          );
        })}
      </>
  );
};

export default WhatsNearby;