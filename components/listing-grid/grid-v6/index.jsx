'use client'

import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {API_BASE_URL} from "@/constants/api";

const index = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('grid');
    const [pagination, setPagination] = useState({
        count: 0,
        current_page: 1,
        total_pages: 1,
        next: null,
        previous: null,
    });

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);

            try {
                const queryParams = new URLSearchParams();

                const type = searchParams.get('type');
                const province = searchParams.get('province');
                const location = searchParams.get('location');

                const residential_units = searchParams.get('residential_units');
                const residential_units_range = searchParams.get('residential_units_range');
                const commercial_units = searchParams.get('commercial_units');
                const commercial_units_range = searchParams.get('commercial_units_range');
                const residential_type = searchParams.get('residential_type');

                const min_price = searchParams.get('min_price');
                const max_price = searchParams.get('max_price');
                const grm_range = searchParams.get('grm_range');
                const cap_rate_range = searchParams.get('cap_rate_range');
                const cost_per_unit_range = searchParams.get('cost_per_unit_range');
                const page = searchParams.get('page') || '1';

                // 51 Per Page
                const page_size = searchParams.get('page_size') || '51';


                const features = searchParams.getAll('features');

                if (type) queryParams.append('type', type);
                if (location) queryParams.append('location', location);
                if (province) queryParams.append('province', province);

                if (residential_type) queryParams.append('residential_type', residential_type);


                const effective_residential_range = residential_units_range || residential_units;
                if (effective_residential_range) {
                    let apiValue = '';
                    switch (effective_residential_range) {
                        case 'Below 10 units':
                            apiValue = 'below_10';
                            break;
                        case '11-20 units':
                            apiValue = '11-20';
                            break;
                        case '21-30 units':
                            apiValue = '21-30';
                            break;
                        case '31+ units':
                        case '31 plus units':
                            apiValue = '31_plus';
                            break;
                        default:
                            apiValue = effective_residential_range;
                    }
                    queryParams.append('residential_units_range', apiValue);
                }

                const effective_commercial_range = commercial_units_range || commercial_units;
                if (effective_commercial_range) {
                    if (effective_commercial_range === 'without') {
                        // "Without Property" -> commercial_units = 0
                        queryParams.append('commercial_units', '1');
                    } else if (effective_commercial_range === 'with') {
                        // "With Property" -> commercial_units > 0
                        queryParams.append('min_commercial_units', '2');
                    } else {

                        let apiValue = effective_commercial_range;
                        if (effective_commercial_range === '5+' || effective_commercial_range === '5 plus') {
                            apiValue = '5+';
                        }
                        queryParams.append('commercial_units_range', apiValue);
                    }
                }


                if (min_price) queryParams.append('min_price', min_price);
                if (max_price) queryParams.append('max_price', max_price);


                if (grm_range) queryParams.append('grm_range', grm_range);


                if (cap_rate_range) {
                    let capRateValue = cap_rate_range;
                    if (cap_rate_range.includes('%25')) {
                        capRateValue = cap_rate_range.replace('%25', '%');
                    }
                    queryParams.append('cap_rate_range', capRateValue);
                }


                if (cost_per_unit_range) queryParams.append('cost_per_unit_range', cost_per_unit_range);


                if (features && features.length > 0) {
                    features.forEach(feature => queryParams.append('features', feature));
                }


                queryParams.append('page', page);
                queryParams.append('page_size', page_size);

                // console.log("Fetching with params:", queryParams.toString());


                const apiUrl = `${API_BASE_URL}/api/properties/?${queryParams.toString()}`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }

                const data = await response.json();
                // console.log("API response:", data);

                setProperties(data.results || []);
                setPagination({
                    count: data.count || 0,
                    current_page: data.current_page || 1,
                    total_pages: data.total_pages || 1,
                    next: data.links?.next || null,
                    previous: data.links?.previous || null,
                });
            } catch (error) {
                console.error("Error fetching properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [searchParams]);


    const handlePageChange = (pageNumber) => {

        const params = new URLSearchParams(searchParams.toString());

        params.set('page', pageNumber);

        router.push(`/listing?${params.toString()}`);
    };

    return (
        <>
            {/* <!-- Main Header Nav --> */}
            <Header/>

            {/* <!--  Mobile Menu --> */}
            <MobileMenu/>

            {/* <!-- Listing Grid View --> */}
            <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <BreadCrumb2/>
                        </div>
                        {/* End .col */}

                        <div className="col-md-4 col-lg-6">
                            <div className="sidebar_switch text-right mobile-filter-menu">
                                {/*<ShowFilter/>*/}
                            </div>
                            {/* ENd button for mobile sidebar show  */}
                        </div>
                        {/* End .col filter grid list */}
                    </div>
                    {/* End Page Breadcrumb and Grid,List and filter Button */}

                    <div className="row">
                        <div className="col-md-12">
                            <div className="grid_list_search_result d-flex justify-content-between align-items-center">
                                <p className="mb-0">{pagination.count} Search results</p>

                                <div className="view_switch">
                                    <button
                                        className={`btn ${viewMode === 'grid' ? 'btn-thm' : 'btn-light'} mx-1`}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        <i className="fa fa-th-large"></i>
                                    </button>
                                    <button
                                        className={`btn ${viewMode === 'list' ? 'btn-thm' : 'btn-light'} mx-1`}
                                        onClick={() => setViewMode('list')}
                                    >
                                        <i className="fa fa-th-list"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                {loading ? (
                                    <div className="col-12 text-center my-5">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <FeaturedItem properties={properties} viewMode={viewMode}/>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    {/* Page */}
                    <div className="row">
                        <div className="col-lg-12 mt20">
                            <div className="mbp_pagination">
                                <Pagination 
                                    currentPage={pagination.current_page} 
                                    totalPages={pagination.total_pages} 
                                />
                            </div>
                        </div>
                    </div>
                    {/* End .row */}
                </div>
            </section>

            {/* <!-- Our Footer --> */}
            <section className="footer_one">
                <div className="container">
                    <div className="row">
                        <Footer/>
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer Bottom Area --> */}
            <section className="footer_middle_area pt40 pb40">
                <div className="container">
                    <CopyrightFooter/>
                </div>
            </section>
        </>
    );
};

export default index;