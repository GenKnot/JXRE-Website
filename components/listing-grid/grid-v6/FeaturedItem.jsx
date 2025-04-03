'use client'

import Link from "next/link";
import Image from "next/image";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addLength} from "../../../features/properties/propertiesSlice";

const FeaturedItem = ({properties = [], viewMode = 'grid'}) => {
    const dispatch = useDispatch();

    // If no properties, show message
    if (!properties || properties.length === 0) {
        useEffect(() => {
            dispatch(addLength(0));
        }, [dispatch]);

        return (
            <div className="col-12 text-center my-5">
                <h3>No properties found matching your criteria</h3>
                <p>Try adjusting your search filters</p>
            </div>
        );
    }

    const gridContent = properties.map((property) => (
        <div className="col-md-6 col-lg-4" key={property.id}>
            <div className="feat_property home7 style4">
                <div className="thumb">
                    {property.featured_image ? (
                        <Image
                            width={342}
                            height={220}
                            className="img-whp w-100 h-100 cover"
                            src={property.featured_image.image_url || '/images/no-image.jpg'}
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
                            <span>No image available</span>
                        </div>
                    )}
                    <div className="thmb_cntnt">
                        <ul className="tag mb0">
                            {property.is_featured && (
                                <li className="list-inline-item">
                                    <a href="#" className="text-white">Featured</a>
                                </li>
                            )}
                        </ul>

                        <Link
                            href={`/listing-details/${property.id}`}
                            className="fp_price"
                        >
                            {property.is_sold ? (
                                <span className="text-white">SOLD</span>
                            ) : (
                                `$${Number(property.price).toLocaleString('en-US', {maximumFractionDigits: 0})}`
                            )}
                        </Link>
                    </div>
                </div>
                <div className="details">
                    <div className="tc_content">
                        <p className="text-thm">
                            {property.residential_units > 0 ? `${property.residential_units} Multifamily` : ''}
                            {property.residential_units > 0 && property.commercial_units > 0 ? ' | ' : ''}
                            {property.commercial_units > 0 ? `${property.commercial_units} Commercial Units` : ''}
                        </p>
                        <h4>
                            <Link href={`/listing-details/${property.id}`}>
                                {property.title}
                            </Link>
                        </h4>
                        <p>
                            <span className="flaticon-placeholder"></span>
                            {property.address}, {property.city}
                        </p>

                        <ul className="prop_details mb0">
                            {/*<li className="list-inline-item">*/}
                            {/*    <a href="#">Created: {new Date(property.created_at).toLocaleDateString()}</a>*!/*/}
                            {/*</li>*/}
                            {/*{property.images_count > 0 && (*/}
                            {/*    <li className="list-inline-item">*/}
                            {/*        <a href="#">Images: {property.images_count}</a>*/}
                            {/*    </li>*/}
                            {/*)}*/}
                        </ul>
                    </div>
                    {/* End .tc_content */}

                    {/* End .fp_footer */}
                </div>

            </div>
        </div>
    ));

    const listContent = properties.map((property) => (
        <div className="col-lg-12" key={property.id}>
            <Link
                // href={property.is_sold ? '#' : `/listing-details/${property.id}`}
                href={`/listing-details/${property.id}`}
                className={`property-list-item d-flex align-items-center py-3 px-2 border-bottom text-decoration-none ${property.is_sold ? 'cursor-default' : 'cursor-pointer'}`}
            >
                {/* SOLD Tag */}
                {property.is_sold && (
                    <span className="sold-tag me-3 px-2 py-1 bg-danger text-white fw-bold rounded small">
                    SOLD
                </span>
                )}

                {/* Title */}
                <div className="property-title me-auto" style={{ color: property.is_sold ? '#6c757d' : '#333' }}>
                    <span className="me-1">{property.title}</span>
                    <span className="text-muted small">({property.city})</span>
                </div>

                {/* Price */}
                <div className="property-price me-4" style={{ color: '#ff5a5f', fontWeight: 'bold' }}>
                    {!property.is_sold ? `$${Number(property.price).toLocaleString()}` : ''}
                </div>

                {/* Property Stats - Only show for non-sold properties */}
                {!property.is_sold && (
                    <div className="property-stats d-flex gap-3">
                        {property.residential_units > 0 && (
                            <span className="small text-muted">
                            <i className="fa fa-building me-1"></i>
                                {property.residential_units} Res.
                        </span>
                        )}
                        {property.commercial_units > 0 && (
                            <span className="small text-muted">
                            <i className="fa fa-store me-1"></i>
                                {property.commercial_units} Com.
                        </span>
                        )}
                    </div>
                )}
            </Link>
        </div>
    ));


    // // Generate content from API properties
    // const content = properties.map((property) => (
    //     <div className="col-md-6 col-lg-4" key={property.id}>
    //         <div className="feat_property home7 style4">
    //             <div className="thumb">
    //                 {property.featured_image ? (
    //                     <Image
    //                         width={342}
    //                         height={220}
    //                         className="img-whp w-100 h-100 cover"
    //                         src={property.featured_image.image_url || '/images/no-image.jpg'}
    //                         alt={property.featured_image.title || property.title}
    //                     />
    //                 ) : (
    //                     <div className="no-image-placeholder" style={{
    //                         height: 220,
    //                         background: '#f5f5f5',
    //                         display: 'flex',
    //                         alignItems: 'center',
    //                         justifyContent: 'center'
    //                     }}>
    //                         <span>No image available</span>
    //                     </div>
    //                 )}
    //                 <div className="thmb_cntnt">
    //                     <ul className="tag mb0">
    //                         {property.is_featured && (
    //                             <li className="list-inline-item">
    //                                 <a href="#" className="text-white">Featured</a>
    //                             </li>
    //                         )}
    //                     </ul>
    //
    //                     <Link
    //                         href={`/listing-details/${property.id}`}
    //                         className="fp_price"
    //                     >
    //                         {property.is_sold ? (
    //                             <span className="text-white">SOLD</span>
    //                         ) : (
    //                             `$${Number(property.price).toLocaleString('en-US', {maximumFractionDigits: 0})}`
    //                         )}
    //                     </Link>
    //                 </div>
    //             </div>
    //             <div className="details">
    //                 <div className="tc_content">
    //                     <p className="text-thm">
    //                         {property.residential_units > 0 ? `${property.residential_units} Multifamily` : ''}
    //                         {property.residential_units > 0 && property.commercial_units > 0 ? ' | ' : ''}
    //                         {property.commercial_units > 0 ? `${property.commercial_units} Commercial Units` : ''}
    //                     </p>
    //                     <h4>
    //                         <Link href={`/listing-details/${property.id}`}>
    //                             {property.title}
    //                         </Link>
    //                     </h4>
    //                     <p>
    //                         <span className="flaticon-placeholder"></span>
    //                         {property.address}, {property.city}
    //                     </p>
    //
    //                     <ul className="prop_details mb0">
    //                         <li className="list-inline-item">
    //                             <a href="#">Created: {new Date(property.created_at).toLocaleDateString()}</a>
    //                         </li>
    //                         {property.images_count > 0 && (
    //                             <li className="list-inline-item">
    //                                 <a href="#">Images: {property.images_count}</a>
    //                             </li>
    //                         )}
    //                     </ul>
    //                 </div>
    //                 {/* End .tc_content */}
    //
    //                 {/* End .fp_footer */}
    //             </div>
    //         </div>
    //     </div>
    // ));

    const content = viewMode === 'grid' ? gridContent : listContent;

    // Update length in Redux state
    useEffect(() => {
        dispatch(addLength(content.length));
    }, [dispatch, content]);

    return <>{content}</>;
};

export default FeaturedItem;