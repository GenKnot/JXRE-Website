const CheckBoxFilter = ({ features, onChange }) => {
  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
                checked={features.elevator}
                onChange={onChange('elevator')}
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Elevator
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck4"
                checked={features.separate_utilities}
                onChange={onChange('separate_utilities')}
              />
              <label className="form-check-label" htmlFor="customCheck4">
                Separate Utilities
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck7"
                checked={features.parking}
                onChange={onChange('parking')}
              />
              <label className="form-check-label" htmlFor="customCheck7">
                Parking
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck10"
                checked={features.basement}
                onChange={onChange('basement')}
              />
              <label className="form-check-label" htmlFor="customCheck10">
                Basement
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CheckBoxFilter;
