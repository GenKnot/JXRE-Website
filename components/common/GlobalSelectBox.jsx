const GlobalSelectBox = ({filters, onChange}) => {
    return (
        <>
            <li className="list-inline-item">
                <div className="candidate_revew_select">
                    <select className="selectpicker w100 show-tick form-select"
                            value={filters.grm}
                            onChange={onChange('grm')}>
                        <option value="">GRM</option>
                        <option>Below 15</option>
                        <option>15-20</option>
                        <option>More than 20</option>
                    </select>
                </div>
            </li>
            {/* End li */}

            <li className="list-inline-item">
                <div className="candidate_revew_select">
                    <select className="selectpicker w100 show-tick form-select"
                            value={filters.cap_rate}
                            onChange={onChange('cap_rate')}>
                        <option value="">CAP Rate</option>
                        <option>2-3%</option>
                        <option>3-4%</option>
                        <option>4%+</option>
                    </select>
                </div>
            </li>
            {/* End li */}

            <li className="list-inline-item">
                <div className="candidate_revew_select">
                    <select className="selectpicker w100 show-tick form-select"
                            value={filters.cost_per_unit}
                            onChange={onChange('cost_per_unit')}>
                        <option value="">Cost Per Unit</option>
                        <option>Below 200k</option>
                        <option>200k-300k</option>
                        <option>300k+</option>
                    </select>
                </div>
            </li>
            {/* End li */}
        </>
    );
};

export default GlobalSelectBox;
