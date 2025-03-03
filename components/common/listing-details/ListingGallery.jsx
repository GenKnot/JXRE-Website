'use client'

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/constants/api";

const ListingGallery = ({ propertyId }) => {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (!property) {
        return <div className="alert alert-warning">Property not found</div>;
    }


    const featuredImage = property.featured_image;
    const additionalImages = property.images?.filter(img => img.id !== featuredImage?.id).slice(0, 6) || [];

    return (
        <>
            <Gallery>
                <div>
                    <div className="row mb30">
                        <div className="col-lg-7 col-xl-8">
                            <div className="single_property_title mt30-767">
                                <h2>{property.title}</h2>
                                <p>{property.address}, {property.city}</p>


                                <div className="property-tags mt-2">
                                    {property.residential_units > 0 && (
                                        <span className="badge bg-p me-2">Residential</span>
                                    )}
                                    {property.commercial_units > 0 && (
                                        <span className="badge bg-p me-2">Commercial</span>
                                    )}
                                    {property.is_sold && (
                                        <span className="badge bg-danger me-2">Sold</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="single_property_social_share position-static transform-none">
                                <div className="price float-start fn-400">
                                    <h2>
                                        Price : <span>{property.is_sold ? 'Sold' : Number(property.price).toLocaleString()}</span>
                                    </h2>
                                </div>

                                <div className="spss style2 mt20 text-end tal-400">
                                    <ul className="mb0">
                                        <li className="list-inline-item">
                                            <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }}>
                                                <span className="flaticon-printer fs-5"></span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-7 col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="spls_style_two mb30-520">
                                        {featuredImage ? (
                                            <Item
                                                original={featuredImage.image_url}
                                                thumbnail={featuredImage.image_url}
                                                width={752}
                                                height={450}
                                            >
                                                {({ ref, open }) => (
                                                    <div
                                                        ref={ref}
                                                        onClick={open}
                                                        className="main-image-container"
                                                        style={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '450px',
                                                            overflow: 'hidden',
                                                            borderRadius: '10px',
                                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        <Image
                                                            fill
                                                            src={featuredImage.image_url}
                                                            alt={featuredImage.title || property.title}
                                                            style={{ objectFit: 'cover' }}
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            priority
                                                        />
                                                        <div
                                                            className="image-overlay"
                                                            style={{
                                                                position: 'absolute',
                                                                bottom: '0',
                                                                left: '0',
                                                                width: '100%',
                                                                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                                                padding: '30px 15px 15px',
                                                                color: 'white'
                                                            }}
                                                        >
                                                            <span className="view-all">View gallery</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </Item>
                                        ) : (
                                            <div
                                                className="no-image-placeholder"
                                                style={{
                                                    height: '450px',
                                                    background: '#f5f5f5',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '10px'
                                                }}
                                            >
                                                <span>No image available</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-5 col-lg-4">
                            <div className="row">
                                {additionalImages.map((image, i) => (
                                    <div className="col-6 mb-4" key={image.id}>
                                        <div className="spls_style_two img-gallery-box">
                                            <Item
                                                original={image.image_url}
                                                thumbnail={image.image_url}
                                                width={752}
                                                height={450}
                                            >
                                                {({ ref, open }) => (
                                                    <div
                                                        ref={ref}
                                                        onClick={open}
                                                        style={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '133px',
                                                            overflow: 'hidden',
                                                            borderRadius: '8px',
                                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        <Image
                                                            fill
                                                            src={image.image_url}
                                                            alt={image.title || `Property image ${i + 1}`}
                                                            style={{ objectFit: 'cover' }}
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                    </div>
                                                )}
                                            </Item>
                                        </div>
                                    </div>
                                ))}
                                {additionalImages.length < 1 && featuredImage && (
                                    <div
                                        className="col-12"
                                        style={{
                                            height: '133px',
                                            background: '#f8f9fa',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '8px',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <span className="text-muted">No additional images</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Gallery>
            <style jsx global>{`
                .main-image-container:hover .image-overlay {
                    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
                }
                .view-all {
                    font-size: 14px;
                    opacity: 0.8;
                    transition: opacity 0.3s;
                }
                .main-image-container:hover .view-all {
                    opacity: 1;
                }
                .property-tags .badge {
                    font-size: 12px;
                    padding: 6px 12px;
                    border-radius: 4px;
                }
                .print-button {
                    font-size: 24px;
                    padding: 8px 12px;
                    display: inline-block;
                    background: #f7f7f7;
                    border-radius: 5px;
                    transition: all 0.3s ease;
                }
                .print-button:hover {
                    background: #e9e9e9;
                }
                .print-button .flaticon-printer {
                    font-size: 20px;
                }
            `}</style>
        </>
    );
};

export default ListingGallery;