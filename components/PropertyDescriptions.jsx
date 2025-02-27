'use client'

import { useState } from "react";

const PropertyDescriptions = ({ description, highlights }) => {
    const [expanded, setExpanded] = useState(false);

    if (!description && !highlights) return null;

    // Process description and highlights to handle line breaks
    const formattedDescription = description ? description.replace(/\r\n/g, "\n").split("\n").filter(line => line.trim()) : [];
    const formattedHighlights = highlights ? highlights.replace(/\r\n/g, "\n").split("\n").filter(line => line.trim()) : [];

    // Combine them, but only show first 3 lines when not expanded
    const allContent = [...formattedDescription, ...formattedHighlights];
    const displayContent = expanded ? allContent : allContent.slice(0, 3);

    // Only show "Show More" if there are more than 3 lines
    const showMoreButton = allContent.length > 3;

    return (
        <>
            {displayContent.map((paragraph, index) => (
                <p className="mb25" key={index}>
                    {paragraph}
                </p>
            ))}

            {showMoreButton && (
                <p className="overlay_close">
                    <a
                        className="text-thm fz14"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setExpanded(!expanded);
                        }}
                    >
                        {expanded ? "Show Less" : "Show More"} <span className={`flaticon-${expanded ? "upload" : "download-1"} fz12`}></span>
                    </a>
                </p>
            )}
        </>
    );
};

export default PropertyDescriptions;