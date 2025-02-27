'use client';

import React, { useEffect, useState } from "react";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WhatsNearby from "../common/listing-details/WhatsNearby";
import { API_BASE_URL } from "@/constants/api";

const DetailsContent = ({ propertyId }) => {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/properties/${propertyId}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch property details');
                }
                const data = await response.json();
                setProperty(data);
            } catch (error) {
                console.error("Error fetching property details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (propertyId) {
            fetchPropertyDetails();
        }
    }, [propertyId]);

    if (loading) {
        return <div className="loading text-center my-5">Loading property details...</div>;
    }

    if (!property) {
        return <div className="alert alert-warning">Property not found</div>;
    }

    const hasVideo = property.video || property.video_url;

    const hasFloorPlans = property.floor_plans && property.floor_plans.length > 0;

    const hasLocations = (property.locations && property.locations.length > 0) || (property.address && property.address.length > 0);

    return (
        <>
            <div className="listing_single_description">
                <div className="lsd_list">
                    <PropertyItem property={property} />
                </div>
                {/* End .lsd_list */}

                <h4 className="mb30">Description</h4>
                <PropertyDescriptions description={property.description} highlights={property.highlights} />
            </div>
            {/* End .listing_single_description */}

            <div className="additional_details">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb15">Property Details</h4>
                    </div>
                    <PropertyDetails property={property} />
                </div>
            </div>
            {/* End .additional_details */}


            {property.building_details && (
                <div className="additional_details">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb15">Building Features</h4>
                        </div>
                        <AdditionalDetails buildingDetails={property.building_details} />
                    </div>
                </div>
            )}
            {/* End .additional_details */}

            {/* 如果有附件，则显示附件部分 */}
            {/* <div className="property_attachment_area">
        <h4 className="mb30">Property Attachments</h4>
        <div className="iba_container style2">
          <Attachments attachments={property.attachments} />
        </div>
      </div> */}

            <div className="application_statics mt30">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb10">Features</h4>
                    </div>
                    {/* End .col */}

                    <PropertyFeatures features={property.features} buildingDetails={property.building_details} />
                </div>
            </div>
            {/* End .feature_area */}


            {hasLocations && (
                <div className="application_statics mt30">
                    <h4 className="mb30">
                        Location{" "}
                        <small className="float-end">
                            {property.address}, {property.city}
                        </small>
                    </h4>
                    <div className="property_video p0">
                        <PropertyLocation address={`${property.address}, ${property.city}`} />
                    </div>
                </div>
            )}
            {/* End .location_area */}


            {hasFloorPlans && (
                <div className="application_statics mt30">
                    <h4 className="mb30">Floor plans</h4>
                    <div className="faq_according style2">
                        <FloorPlans floorPlans={property.floor_plans} />
                    </div>
                </div>
            )}
            {/* End .floor_plane */}


            {hasVideo && (
                <div className="shop_single_tab_content style2 mt30">
                    <PropertyVideo video={property.video} videoUrl={property.video_url} />
                </div>
            )}
            {/* End property-video */}


            {hasLocations && (
                <div className="whats_nearby mt30">
                    <h4 className="mb10">What&apos;s Nearby</h4>
                    <WhatsNearby locations={property.locations} />
                </div>
            )}
            {/* End what's nearby area */}
        </>
    );
};

export default DetailsContent;