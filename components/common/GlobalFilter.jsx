'use client'

import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {store} from "@/store/store";

const GlobalFilter = ({className = ""}) => {
    const router = useRouter()

    const [filters, setFilters] = useState({
        location: '',
        residential_units: '',
        commercial_units: '',
        residential_type: '',
        price_range: '',
        price_min: 200000,
        price_max: 50000000,
        grm: '',
        cap_rate: '',
        cost_per_unit: '',
        features: {
            elevator: false,
            separate_utilities: false,
            parking: false,
            basement: false
        }
    });


    // 处理普通选择器的变化
    const handleSelectChange = (field) => (e) => {
        setFilters({
            ...filters,
            [field]: e.target.value
        });
    };

    // 处理价格范围的变化
    const handlePriceChange = (priceRange) => {
        setFilters({
            ...filters,
            price_min: priceRange.min,
            price_max: priceRange.max
        });
    };

    // 处理复选框的变化
    const handleCheckboxChange = (feature) => (e) => {
        setFilters({
            ...filters,
            features: {
                ...filters.features,
                [feature]: e.target.checked
            }
        });
    };

    // 处理高级选项的变化
    const handleAdvancedChange = (field) => (e) => {
        setFilters({
            ...filters,
            [field]: e.target.value
        });
    };


    const submitHandler = () => {
        const queryParams = new URLSearchParams();

        // 添加基本筛选条件
        if (filters.location) queryParams.append('location', filters.location);

        // 住宅单位 - 修正参数名称
        if (filters.residential_units) {
            queryParams.append('residential_units_range', filters.residential_units);
        }

        // 商业单位
        if (filters.commercial_units) {
            if (filters.commercial_units === 'without') {
                // "Without Property" -> commercial_units = 0
                queryParams.append('commercial_units', 'without');
            } else if (filters.commercial_units === 'with') {
                // "With Property" -> commercial_units >= 1
                // commercial_units=without
                queryParams.append('commercial_units', 'with');
            } else {
                queryParams.append('commercial_units', filters.commercial_units);
            }
        }

        if (filters.residential_type) {
            queryParams.append('residential_type', filters.residential_type);
        }

        if (filters.price_range) {
            switch(filters.price_range) {
                case 'under_200k':
                    queryParams.append('min_price', '0');
                    queryParams.append('max_price', '200000');
                    break;
                case '200k_500k':
                    queryParams.append('min_price', '200000');
                    queryParams.append('max_price', '500000');
                    break;
                case '500k_1m':
                    queryParams.append('min_price', '500000');
                    queryParams.append('max_price', '1000000');
                    break;
                case '1m_1.5m':
                    queryParams.append('min_price', '1000000');
                    queryParams.append('max_price', '1500000');
                    break;
                case 'over_1.5m':
                    queryParams.append('min_price', '1500000');
                    break;
            }
        }

        // 财务指标
        if (filters.grm) queryParams.append('grm_range', filters.grm);
        if (filters.cap_rate) queryParams.append('cap_rate_range', filters.cap_rate);
        if (filters.cost_per_unit) queryParams.append('cost_per_unit_range', filters.cost_per_unit);


        Object.entries(filters.features)
            .filter(([_, value]) => value)
            .forEach(([key, _]) => queryParams.append('features', key));


        router.push(`/listing?${queryParams.toString()}`);
    };

    return (
        <div className={`home1-advnc-search ${className}`}>
            <ul className="h1ads_1st_list mb0">
                <li className="list-inline-item">
                    <select className="selectpicker w100 form-select show-tick"
                            onChange={handleSelectChange('location')}
                            value={filters.location}>
                        <option value="">Quebec or Ontario</option>
                        <option>Quebec</option>
                        <option>Ontario</option>
                    </select>
                </li>
                {/* End li */}

                <li className="list-inline-item">
                    <div className="search_option_two">
                        <div className="candidate_revew_select">
                            <select className="selectpicker w100 form-select show-tick"
                                    onChange={handleSelectChange('residential_units')}
                                    value={filters.residential_units}>
                                <option value="">Multifamily</option>
                                <option value="below_10">Below 10 units</option>
                                <option value="11-20">11-20 units</option>
                                <option value="21-30">21-30 units</option>
                                <option value="31_plus">31+ units</option>
                            </select>
                        </div>
                    </div>
                </li>
                {/* End li */}

                <li className="list-inline-item">
                    <div className="search_option_two">
                        <div className="candidate_revew_select">
                            <select className="selectpicker w100 form-select show-tick"
                                    onChange={handleSelectChange('commercial_units')}
                                    value={filters.commercial_units}>
                                <option value="">Commercial</option>
                                <option value="without">Without Property</option>
                                <option value="with">With Property</option>
                            </select>
                        </div>
                    </div>
                </li>
                {/* End li */}


                <li className="list-inline-item">
                    <div className="search_option_two">
                        <div className="candidate_revew_select">
                            <select className="selectpicker w100 form-select show-tick"
                                    onChange={handleSelectChange('price_range')}
                                    value={filters.price_range}>
                                <option value="">Price Range</option>
                                <option value="under_200k">Under $200k</option>
                                <option value="200k_500k">$200k - $500k</option>
                                <option value="500k_1m">$500k - $1M</option>
                                <option value="1m_1.5m">$1M - $1.5M</option>
                                <option value="over_1.5m">Over $1.5M</option>
                            </select>
                        </div>
                    </div>
                </li>
                {/* End li */}

                <li className="custome_fields_520 list-inline-item">
                    <div className="navbered">
                        <div className="mega-dropdown ">
              <span
                  className="dropbtn"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false">

                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

                            <div className="dropdown-content dropdown-menu ">
                                <div className="row p15">
                                    <div className="col-lg-12">
                                        <h4 className="text-thm3 mb-4">Features</h4>
                                    </div>

                                    <CheckBoxFilter features={filters.features}
                                                    onChange={handleCheckboxChange}/>
                                </div>
                                {/* End .row */}

                                <div className="row p15 pt0-xsd">
                                    <div className="col-lg-12 col-xl-12">
                                        <ul className="apeartment_area_list mb0">
                                            <GlobalSelectBox filters={filters}
                                                             onChange={handleAdvancedChange}/>
                                        </ul>
                                    </div>
                                </div>
                                {/* End .row */}
                            </div>
                            {/* End .dropdown-menu */}
                        </div>
                    </div>
                </li>
                {/* End li */}

                <li className="list-inline-item">
                    <div className="search_option_button">
                        <button
                            onClick={submitHandler}
                            type="submit"
                            className="btn btn-thm"
                        >
                            Search
                        </button>
                    </div>
                </li>
                {/* End li */}
            </ul>
        </div>
    );
};

export default GlobalFilter;