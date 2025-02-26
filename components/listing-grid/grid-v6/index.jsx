'use client'

import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing from "../../common/listing/SidebarListing";
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
                // Build query parameters from URL
                const queryParams = new URLSearchParams();

                // Get all the parameters from the URL
                const city = searchParams.get('city');
                const location = searchParams.get('location');
                const residential_units_range = searchParams.get('residential_units_range');
                const commercial_units_range = searchParams.get('commercial_units_range');
                const price_min = searchParams.get('price_min');
                const price_max = searchParams.get('price_max');
                const grm_range = searchParams.get('grm_range');
                const cap_rate_range = searchParams.get('cap_rate_range');
                const cost_per_unit_range = searchParams.get('cost_per_unit_range');
                const page = searchParams.get('page') || '1';
                const page_size = searchParams.get('page_size') || '10';

                // Map feature checkboxes
                const features = searchParams.getAll('features');

                // Map query parameters to API parameters
                if (location) queryParams.append('location', location);
                if (city) queryParams.append('city', city);

                // Map UI values to API values for residential units
                if (residential_units_range) {
                    let apiValue = '';
                    switch (residential_units_range) {
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
                            apiValue = '31_plus';
                            break;
                        default:
                            apiValue = residential_units_range;
                    }
                    queryParams.append('residential_units_range', apiValue);
                }

                // Map commercial units
                if (commercial_units_range) {
                    let apiValue = commercial_units_range;
                    // Clean up the value if needed
                    if (commercial_units_range === '5+') apiValue = '5+';
                    queryParams.append('commercial_units_range', apiValue);
                }

                if (price_min) queryParams.append('min_price', price_min);
                if (price_max) queryParams.append('max_price', price_max);

                // Map GRM ranges
                if (grm_range) queryParams.append('grm_range', grm_range);

                // Map CAP rate
                if (cap_rate_range) queryParams.append('cap_rate_range', cap_rate_range);

                // Map cost per unit
                if (cost_per_unit_range) queryParams.append('cost_per_unit_range', cost_per_unit_range);

                // Handle multiple features
                if (features && features.length > 0) {
                    features.forEach(feature => queryParams.append('features', feature));
                }

                // Pagination
                queryParams.append('page', page);
                queryParams.append('page_size', page_size);

                console.log("Fetching with params:", queryParams.toString());

                // API endpoint
                const apiUrl = `${API_BASE_URL}/api/properties/?${queryParams.toString()}`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }

                const data = await response.json();
                console.log("API response:", data);

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

    // Handle page change - navigate to new URL
    const handlePageChange = (pageNumber) => {
        // Build current query parameters
        const params = new URLSearchParams(searchParams.toString());
        // Update page parameter
        params.set('page', pageNumber);
        // Navigate to the new URL
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
                                <ShowFilter/>
                            </div>
                            {/* ENd button for mobile sidebar show  */}
                        </div>
                        {/* End .col filter grid list */}
                    </div>
                    {/* End Page Breadcrumb and Grid,List and filter Button */}

                    <div className="row">
                        <div className="col-md-12">
                            <div className="grid_list_search_result ">
                                <div className="row align-items-center">
                                    <FilterTopBar propertyCount={pagination.count}/>
                                </div>
                            </div>
                            {/* End .row */}

                            <div className="row">
                                {loading ? (
                                    <div className="col-12 text-center my-5">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <FeaturedItem properties={properties}/>
                                )}
                            </div>
                            {/* End .row */}

                            <div className="row">
                                <div className="col-lg-12 mt20">
                                    <div className="mbp_pagination">
                                        <Pagination
                                            currentPage={pagination.current_page}
                                            totalPages={pagination.total_pages}
                                            onPageChange={handlePageChange}
                                        />
                                    </div>
                                </div>
                                {/* End paginaion .col */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .col */}

                        <div
                            className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                            tabIndex="-1"
                            id="sidebarListing"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title">Advanced Search</h5>
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            {/* End .offcanvas-heade */}

                            <div className="offcanvas-body">
                                <SidebarListing/>
                            </div>
                        </div>
                        {/* End mobile sidebar listing  */}
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
