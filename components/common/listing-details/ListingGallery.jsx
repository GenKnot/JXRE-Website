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

    // Get the first 4 images for the gallery
    const featuredImage = property.featured_image;
    const additionalImages = property.images?.filter(img => img.id !== featuredImage?.id).slice(0, 3) || [];

    return (
        <>
            <Gallery>
                <div>
                    <div className="row mb30">
                        <div className="col-lg-7 col-xl-8">
                            <div className="single_property_title mt30-767">
                                <h2>{property.title}</h2>
                                <p>{property.address}, {property.city}</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="single_property_social_share position-static transform-none">
                                <div className="price float-start fn-400">
                                    <h2>
                                        ${Number(property.price).toLocaleString()}
                                        {property.is_sold && <span className="badge bg-danger ms-2">Sold</span>}
                                    </h2>
                                </div>

                                <div className="spss style2 mt20 text-end tal-400">
                                    <ul className="mb0">
                                        <li className="list-inline-item">
                                            <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }}>
                                                <span className="flaticon-printer"></span>
                                            </a>
                                        </li>
                                        {property.is_featured && (
                                            <li className="list-inline-item">
                                                <span className="badge bg-success">Featured</span>
                                            </li>
                                        )}
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
                                        {featuredImage && (
                                            <Item
                                                original={featuredImage.image_url}
                                                thumbnail={featuredImage.image_url}
                                                width={752}
                                                height={450}
                                            >
                                                {({ ref, open }) => (
                                                    <div role="button" ref={ref} onClick={open}>
                                                        <Image
                                                            width={752}
                                                            height={450}
                                                            className="img-fluid w100 lds-1 cover h-100"
                                                            src={featuredImage.image_url}
                                                            alt={featuredImage.title || property.title}
                                                        />
                                                    </div>
                                                )}
                                            </Item>
                                        )}
                                        {!featuredImage && (
                                            <div className="no-image-placeholder" style={{ height: 450, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                    <div className="col-6" key={image.id}>
                                        <div className="spls_style_two img-gallery-box mb24">
                                            <Item
                                                original={image.image_url}
                                                thumbnail={image.image_url}
                                                width={752}
                                                height={450}
                                            >
                                                {({ ref, open }) => (
                                                    <div role="button" ref={ref} onClick={open}>
                                                        <Image
                                                            width={170}
                                                            height={133}
                                                            className="img-fluid w100 cover"
                                                            src={image.image_url}
                                                            alt={image.title || `Property image ${i + 1}`}
                                                        />
                                                    </div>
                                                )}
                                            </Item>
                                        </div>
                                    </div>
                                ))}
                                {additionalImages.length < 1 && featuredImage && (
                                    <div className="col-12">
                                        <div className="view-all-images" style={{ height: 133, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span>No additional images</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Gallery>
        </>
    );
};

export default ListingGallery;