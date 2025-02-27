'use client'

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/constants/api";
import PropertyItem from "./PropertyItem";
import PropertyDescriptions from "./PropertyDescriptions";
import PropertyDetails from "./PropertyDetails";
import AdditionalDetails from "./AdditionalDetails";
import PropertyFeatures from "./PropertyFeatures";
import PropertyLocation from "./PropertyLocation";
import FloorPlans from "./FloorPlans";
import PropertyVideo from "./PropertyVideo";
import WhatsNearby from "./WhatsNearby";
import UnitDistribution from "./UnitDistribution";

const DetailsContent = ({ propertyId }) => {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/properties/${propertyId}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch property details');
                }
                const data = await response.json();
                setProperty(data);
            } catch (error) {
                console.error("Error fetching property:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (propertyId) {
            fetchProperty();
        }
    }, [propertyId]);

    if (loading) {
        return <div className="loading-spinner text-center my-5">Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!property) {
        return <div className="alert alert-warning">Property not found</div>;
    }

    return (
        <>
            <div className="listing_single_description">
                <div className="lsd_list">
                    <PropertyItem property={property} />
                </div>

                <h4 className="mb30">Description</h4>
                <PropertyDescriptions
                    description={property.description}
                    highlights={property.highlights}
                />
            </div>

            <div className="additional_details mt30">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb15">Property Details</h4>
                    </div>
                    <PropertyDetails property={property} />
                </div>
            </div>

            {property.unit_distribution && (
                <div className="additional_details mt30">
                    <UnitDistribution unitDistribution={property.unit_distribution} />
                </div>
            )}

            {(property.revenue || property.cap_rate || property.assessment_year) && (
                <div className="additional_details mt30">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb15">Financial & Assessment Details</h4>
                        </div>
                        <AdditionalDetails property={property} />
                    </div>
                </div>
            )}

            {(property.features || property.building_details) && (
                <div className="application_statics mt30">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb10">Features</h4>
                        </div>
                        <PropertyFeatures property={property} />
                    </div>
                </div>
            )}

            <div className="application_statics mt30">
                <h4 className="mb30">
                    Location{" "}
                    <small className="float-end">
                        {property.address}, {property.city}
                    </small>
                </h4>
                <div className="property_video p0">
                    <PropertyLocation property={property} />
                </div>
            </div>

            {property.floor_plans && property.floor_plans.length > 0 && (
                <div className="application_statics mt30">
                    <h4 className="mb30">Floor plans</h4>
                    <div className="faq_according style2">
                        <FloorPlans floorPlans={property.floor_plans} />
                    </div>
                </div>
            )}

            {(property.video || property.video_url) && (
                <div className="shop_single_tab_content style2 mt30">
                    <PropertyVideo property={property} />
                </div>
            )}

            {property.locations && property.locations.length > 0 && (
                <div className="whats_nearby mt30">
                    <h4 className="mb10">What&apos;s Nearby</h4>
                    <WhatsNearby locations={property.locations} />
                </div>
            )}
        </>
    );
};

export default DetailsContent;