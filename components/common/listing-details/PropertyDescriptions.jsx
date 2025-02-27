'use client'

import {useState} from "react";

const PropertyDescriptions = ({description, highlights}) => {
    const [showMore, setShowMore] = useState(false);

    if (!description && !highlights) return null;

    return (
        <>
            {description && (
                <div className="mb25">
                    <h5>Description</h5>
                    <p className={showMore ? "" : "gpara white_goverlay mt10 mb10"}>
                        {description}
                    </p>
                    {description.length > 300 && (
                        <p className="overlay_close">
                            <a

                                className="text-thm fz14"
                                onClick={() => setShowMore(!showMore)}
                                role="button"
                            >
                                {showMore ? "Show Less" : "Show More"} <span
                                className="flaticon-download-1 fz12"></span>
                            </a>
                        </p>
                    )}
                </div>
            )}

            {highlights && (
                <div className="mt20">
                    <h5>Highlights</h5>
                    <p>{highlights}</p>
                </div>
            )}
        </>
    );
};

export default PropertyDescriptions;