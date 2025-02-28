'use client'

const PropertyDescriptions = ({description, highlights}) => {
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