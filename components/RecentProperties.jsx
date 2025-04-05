'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { API_BASE_URL } from "@/constants/api";

const RecentProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {

                const response = await fetch(`${API_BASE_URL}/api/properties/?is_active=false&is_sold=false&page_size=9&ordering=-created_at`);

                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }

                const data = await response.json();
                setProperties(data.results || []);
            } catch (error) {
                console.error("Error fetching properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);


    const getPropertyTypeDisplay = (property) => {
        if (property.is_house) return "House";
        if (property.is_townhouse) return "Townhouse";
        if (property.is_condo) return "Condo";
        if (property.residential_units > 0 && property.commercial_units > 0) return "Mixed Use";
        if (property.residential_units > 0) return "Residential";
        return "Commercial";
    };


    const getPriceDisplay = (property) => {
        if (property.is_sold) return "SOLD";
        if (property.property_status === 'for_lease') {
            return `$${Number(property.monthly_rent).toLocaleString()}/month`;
        }
        return `$${Number(property.price).toLocaleString()}`;
    };


    const getStatusDisplay = (property) => {
        if (property.is_sold) return "Sold";
        if (property.property_status === 'for_lease') return "For Lease";
        return "For Sale";
    };

    if (loading) {
        return (
            <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (properties.length === 0) {
        return (
            <div className="col-12 text-center py-5">
                <p>No properties available at the moment. Please check back soon.</p>
            </div>
        );
    }


    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    const propertyRows = chunkArray(properties, 3);

    return (
        <>
            {propertyRows.map((row, rowIndex) => (
                <div className="row mb-4" key={`row-${rowIndex}`}>
                    {row.map((property) => (
                        <div className="col-sm-12 col-md-6 col-lg-4" key={property.id}>
                            <div className="for_blog feat_property compact-property">
                                <div className="thumb property-thumb">
                                    <Link href={`/listing-details/${property.id}`}>
                                        <div className="property-img-container" style={{ position: 'relative', height: '220px' }}>
                                            {property.featured_image ? (
                                                <Image
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    src={property.featured_image.image_url || '/assets/images/property/no-image.jpg'}
                                                    alt={property.title}
                                                />
                                            ) : (
                                                <div className="no-image-placeholder d-flex align-items-center justify-content-center bg-light" style={{height: '100%'}}>
                                                    <span>No image available</span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="thmb_cntnt">
                                        <ul className="tag mb0">
                                            {property.city && (
                                                <li className="list-inline-item">
                                                    <a href="#" className="text-white">{property.city}</a>
                                                </li>
                                            )}
                                            <li className="list-inline-item">
                                                <a href="#" className="text-white">{getStatusDisplay(property)}</a>
                                            </li>
                                            {property.is_active && (
                                                <li className="list-inline-item">
                                                    <a href="#" className="text-white">Active</a>
                                                </li>
                                            )}
                                        </ul>
                                        <Link href={`/listing-details/${property.id}`} className="fp_price">
                                            {getPriceDisplay(property)}
                                        </Link>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="tc_content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="text-thm property-units mb-0">
                                                {getPropertyTypeDisplay(property)}
                                            </p>
                                        </div>
                                        <h5 className="property-title mt-2 mb-0">
                                            <Link href={`/listing-details/${property.id}`}>{property.title}</Link>
                                        </h5>
                                        <p>
                                            <span className="flaticon-placeholder"></span>
                                            {property.address}, {property.city}
                                        </p>

                                        <ul className="prop_details mb0">
                                            {(property.is_house || property.is_townhouse || property.is_condo) ? (
                                                <>
                                                    {property.bedrooms > 0 && (
                                                        <li className="list-inline-item">
                                                            <a href="#">Bedrooms: {property.bedrooms}</a>
                                                        </li>
                                                    )}
                                                    {property.bathrooms > 0 && (
                                                        <li className="list-inline-item">
                                                            <a href="#">Bathrooms: {property.bathrooms}</a>
                                                        </li>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {property.residential_units > 0 && (
                                                        <li className="list-inline-item">
                                                            <a href="#">{property.residential_units === 1 ? "Unit" : "Units"}: {property.residential_units}</a>
                                                        </li>
                                                    )}
                                                    {property.commercial_units > 0 && (
                                                        <li className="list-inline-item">
                                                            <a href="#">
                                                                {property.commercial_units === 1 ? "Commercial Without Property" : "Commercial With Property"}
                                                            </a>
                                                        </li>
                                                    )}
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default RecentProperties;