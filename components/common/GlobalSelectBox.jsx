const GlobalSelectBox = ({filters, onChange}) => {
    return (
        <>
            <li className="list-inline-item">
                <div className="candidate_revew_select">
                    <select className="selectpicker w100 show-tick form-select"
                            value={filters.grm}
                            onChange={onChange('grm')}>
                        <option value="">GRM</option>
                        <option value="Below 15">Below 15</option>
                        <option value="15-20">15-20</option>
                        <option value="More than 20">More than 20</option>
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
                        <option value="2-3%">2-3%</option>
                        <option value="3-4%">3-4%</option>
                        <option value="4%+">4%+</option>
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
                        <option value="Below 200k">Below 200k</option>
                        <option value="200k-300k">200k-300k</option>
                        <option value="300k+">300k+</option>
                    </select>
                </div>
            </li>
            {/* End li */}
        </>
    );
};

export default GlobalSelectBox;