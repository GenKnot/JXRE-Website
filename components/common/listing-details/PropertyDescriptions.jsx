'use client'

const PropertyDescriptions = ({description, highlights, isSold = false}) => {
    if (isSold) {
        return (
            <div className="mb25">
                <div className="property-description mt10 mb30">
                    <div className="sold-property-notice">
                        <p>
                            <strong>This property has been sold.</strong>
                        </p>
                        <p>
                            Thank you for your interest in this property. Please note that as this property has already been sold, detailed information is no longer available. We encourage you to browse our other available properties that may meet your investment criteria.
                        </p>
                        <p>
                            If you have specific requirements or are looking for similar properties, please don't hesitate to contact our real estate specialists who can assist you in finding the perfect investment opportunity.
                        </p>
                    </div>
                </div>

                <style jsx global>{`
                    .property-description,
                    .property-highlights {
                        font-size: 15px;
                        line-height: 1.7;
                        color: #484848;
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                    }
                    
                    .sold-property-notice {
                        background-color: #f8f9fa;
                        border-left: 4px solid #ff5a5f;
                        padding: 15px 20px;
                        border-radius: 4px;
                    }
                    
                    .sold-property-notice p:first-child {
                        color: #ff5a5f;
                    }
                    
                    .description-title,
                    .highlights-title {
                        font-size: 18px;
                        font-weight: 600;
                        color: #222;
                        margin-bottom: 15px;
                    }
                `}</style>
            </div>
        );
    }


    if (!description && !highlights) return null;

    return (
        <>
            {description && (
                <div className="mb25">
                    {/*<h5 className="description-title">Description</h5>*/}
                    <div
                        className="property-description mt10 mb10"
                        dangerouslySetInnerHTML={{
                            __html: description.replace(/\n/g, '<br />')
                        }}
                    />
                </div>
            )}

            {highlights && (
                <div className="mt20">
                    <h5 className="highlights-title">Highlights</h5>
                    <div
                        className="property-highlights"
                        dangerouslySetInnerHTML={{
                            __html: highlights.replace(/\n/g, '<br />')
                        }}
                    />
                </div>
            )}

            <style jsx global>{`
                .property-description,
                .property-highlights {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #484848;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }

                .description-title,
                .highlights-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #222;
                    margin-bottom: 15px;
                }
            `}</style>
        </>
    );
};

export default PropertyDescriptions;