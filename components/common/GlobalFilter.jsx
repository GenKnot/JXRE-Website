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
        // 构建 query string
        const queryParams = new URLSearchParams();
        const priceState = store.getState().properties.price;

        // 添加基本筛选条件
        if (filters.location) queryParams.append('location', filters.location);

        // 住宅单位 - 修正参数名称
        if (filters.residential_units) {
            queryParams.append('residential_units_range', filters.residential_units);
        }

        // 商业单位 - 修正参数名称
        if (filters.commercial_units) {
            queryParams.append('commercial_units_range', filters.commercial_units);
        }

        // 价格范围
        if (priceState.min) queryParams.append('min_price', priceState.min.toString());
        if (priceState.max) queryParams.append('max_price', priceState.max.toString());

        // 财务指标
        if (filters.grm) queryParams.append('grm_range', filters.grm);
        if (filters.cap_rate) queryParams.append('cap_rate_range', filters.cap_rate);
        if (filters.cost_per_unit) queryParams.append('cost_per_unit_range', filters.cost_per_unit);

        // 特性过滤 - 只添加选中的
        Object.entries(filters.features)
            .filter(([_, value]) => value)
            .forEach(([key, _]) => queryParams.append('features', key));

        // 跳转到列表页面
        router.push(`/listing?${queryParams.toString()}`);
    };

    return (
        <div className={`home1-advnc-search ${className}`}>
            <ul className="h1ads_1st_list mb0">
                <li className="list-inline-item">
                    <select className="selectpicker w100 form-select show-tick"
                            onChange={handleSelectChange('location')}
                            value={filters.location}>
                        <option value="">Montreal or Toronto</option>
                        <option>Montreal</option>
                        <option>Toronto</option>
                    </select>
                </li>
                {/* End li */}

                <li className="list-inline-item">
                    <div className="search_option_two">
                        <div className="candidate_revew_select">
                            <select className="selectpicker w100 form-select show-tick"
                                    onChange={handleSelectChange('residential_units')}
                                    value={filters.residential_units}>
                                <option value="">Residential Units</option>
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
                                <option value="">Commercial Units</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2-5">2-5</option>
                                <option value="5+">5+</option>
                            </select>
                        </div>
                    </div>
                </li>
                {/* End li */}


                <li className="list-inline-item">
                    <div className="small_dropdown2">
                        <div
                            id="prncgs"
                            className="btn dd_btn"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            <span>Price Range</span>
                            <label htmlFor="InputEmail2">
                                <span className="fa fa-angle-down"></span>
                            </label>
                        </div>
                        <div className="dd_content2 dropdown-menu">
                            <div className="pricing_acontent">
                                <PricingRangeSlider/>
                            </div>
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