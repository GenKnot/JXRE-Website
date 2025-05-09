'use client';

import { useEffect, useState } from "react";
import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import FeatureProperties from "../common/listing/FeatureProperties";
import { API_BASE_URL } from "@/constants/api";

const Sidebar = ({ propertyId }) => {
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedProperties = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/properties/featured/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch featured properties');
                }
                const data = await response.json();

                const currentPropertyId = parseInt(propertyId, 10);
                const filteredProperties = data.filter(prop => prop.id !== currentPropertyId);

                setFeaturedProperties(filteredProperties);
            } catch (error) {
                console.error("Error fetching featured properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProperties();
    }, [propertyId]);

    const showFeaturedProperties = !loading && featuredProperties.length > 0;

    return (
        <>
            <div className="sidebar_listing_list">
                <div className="sidebar_advanced_search_widget">
                    <div className="sl_creator">
                        <h4 className="mb25">Contact Us</h4>
                    </div>
                    <ContactWithAgent propertyId={propertyId} />
                </div>
            </div>
            {/* End .sidebar_listing_list */}

            {showFeaturedProperties && (
                <div className="terms_condition_widget mt-4">
                    <h4 className="title">Featured Properties</h4>
                    <div className="sidebar_feature_property_slider">
                        <FeatureProperties properties={featuredProperties} />
                    </div>
                </div>
            )}
            {/* End .Featured Properties */}
        </>
    );
};

export default Sidebar;