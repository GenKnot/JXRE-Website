'use client'

import {useEffect, useState} from "react";
import ContactForm from "./ContactForm";
import {API_BASE_URL} from "@/constants/api";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({propertyId}) => {
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

                // Filter out the current property
                const filteredProperties = data.filter(property => property.id !== Number(propertyId));

                // Limit to 3 properties
                setFeaturedProperties(filteredProperties.slice(0, 3));
            } catch (error) {
                console.error("Error fetching featured properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProperties();
    }, [propertyId]);

    return (
        <>
            <div className="sidebar_listing_list">
                <div className="sidebar_advanced_search_widget">
                    <h4 className="mb25">Contact Us</h4>
                    <ContactForm propertyId={propertyId}/>
                </div>
            </div>

            {featuredProperties.length > 0 && (
                <div className="terms_condition_widget mt30">
                    <h4 className="title">Featured Properties</h4>
                    <div className="sidebar_feature_property_slider">
                        {featuredProperties.map(property => (
                            <div className="item" key={property.id}>
                                <div className="feat_property home7">
                                    <div className="thumb">
                                        {property.featured_image ? (
                                            <Image
                                                width={300}
                                                height={220}
                                                className="img-whp w-100 h-100 cover"
                                                src={property.featured_image.image_url}
                                                alt={property.featured_image.title || property.title}
                                            />
                                        ) : (
                                            <div className="no-image-placeholder" style={{
                                                height: 220,
                                                background: '#f5f5f5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <span>No image</span>
                                            </div>
                                        )}

                                        <div className="thmb_cntnt">
                                            <ul className="tag mb0">
                                                {property.is_sold && (
                                                    <li className="list-inline-item">
                                                        <a href="#" className="bg-danger">Sold</a>
                                                    </li>
                                                )}
                                                {property.is_featured && (
                                                    <li className="list-inline-item">
                                                        <a href="#">Featured</a>
                                                    </li>
                                                )}
                                            </ul>
                                            <Link className="fp_price" href={`/listing-details-v1/${property.id}`}>
                                                ${Number(property.price).toLocaleString()}
                                            </Link>
                                            <h4 className="posr color-white">
                                                <Link
                                                    href={`/listing-details-v1/${property.id}`}>{property.title}</Link>
                                            </h4>
                                            <p className="color-white">
                                                <span
                                                    className="flaticon-placeholder"></span> {property.address}, {property.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;