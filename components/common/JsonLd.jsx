const JsonLd = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "JXRE",
        "description": "Strategic Multifamily Investment Advisory focused on long-term value, structure, and stability across Ontario and Quebec.",
        "url": "https://jxre.ca",
        "logo": "https://jxre.ca/assets/images/JXRE.png",
        "image": "https://jxre.ca/b2.jpg",
        "telephone": ["+1-647-616-9785", "+1-514-651-4588"],
        "email": "info@jxre.ca",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "8300 Woodbine Ave, unit 500",
                "addressLocality": "Markham",
                "addressRegion": "ON",
                "postalCode": "L3R 9Y7",
                "addressCountry": "CA"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "9515 Boul. LaSalle",
                "addressLocality": "LaSalle",
                "addressRegion": "QC",
                "postalCode": "H8R 2M9",
                "addressCountry": "CA"
            }
        ],
        "areaServed": [
            {
                "@type": "State",
                "name": "Ontario"
            },
            {
                "@type": "State",
                "name": "Quebec"
            }
        ],
        "knowsLanguage": ["en", "fr", "zh"],
        "priceRange": "$$$",
        "sameAs": []
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Multifamily Investment Advisory",
        "provider": {
            "@type": "RealEstateAgent",
            "name": "JXRE"
        },
        "areaServed": ["Ontario", "Quebec", "Toronto", "Montreal"],
        "description": "Expert guidance on multifamily acquisitions, financing structures, and long-term hold strategies."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    );
};

export default JsonLd;
