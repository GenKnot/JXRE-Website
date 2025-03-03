'use client'

import Link from "next/link";
import { useState, useEffect } from 'react';
import { API_BASE_URL } from "@/constants/api";

const formatPrice = (price) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

    if (isNaN(numericPrice)) return '$0';

    return '$' + Math.floor(numericPrice).toLocaleString('en-US');
};

const RecentProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/properties/?page_size=9&ordering=-created_at`);

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
                                        <div className="property-img-container">
                                            {property.featured_image ? (
                                                <img
                                                    className="img-fluid w-100"
                                                    src={property.featured_image.image_url || '/images/property/no-image.jpg'}
                                                    alt={property.title}
                                                />
                                            ) : (
                                                <div className="no-image-placeholder d-flex align-items-center justify-content-center bg-light">
                                                    <span>No image available</span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="thmb_cntnt">
                                        <ul className="tag mb0">
                                            {property.is_featured && (
                                                <li className="list-inline-item">
                                                    <a href="#" className="text-white">Featured</a>
                                                </li>
                                            )}
                                        </ul>
                                        <Link href={`/listing-details/${property.id}`} className="fp_price">
                                            {property.is_sold ? (
                                                <span className="text-white">SOLD</span>
                                            ) : (
                                                `${formatPrice(property.price)}`
                                            )}
                                        </Link>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="tc_content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="text-thm property-units mb-0">
                                                {property.residential_units > 0 ? `${property.residential_units} Res.` : ''}
                                                {property.residential_units > 0 && property.commercial_units > 0 ? ' | ' : ''}
                                                {property.commercial_units > 0 ? `${property.commercial_units} Comm.` : ''}
                                            </p>
                                            <p className="mb-0 property-city">{property.city}</p>
                                        </div>
                                        <h5 className="property-title mt-2 mb-0">
                                            <Link href={`/listing-details/${property.id}`}>{property.title}</Link>
                                        </h5>
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