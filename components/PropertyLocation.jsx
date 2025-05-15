import Image from "next/image";

const PropertyLocation = ({ property }) => {
    if (!property) return null;

    // Create Google Maps URL with the property address
    const mapAddress = encodeURIComponent(`${property.address}, ${property.province}`);

    return (
        <>
            <div className="thumb">
                <div className="h400" id="map-canvas" style={{ height: '400px', width: '100%', position: 'relative' }}>
                    <div className="mapouter" style={{ height: '100%', width: '100%' }}>
                        <div className="gmap_canvas" style={{ height: '100%', width: '100%' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src={`https://maps.google.com/maps?q=${mapAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="overlay_icon">
                    <a href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            width={40}
                            height={45}
                            className="map_img_icon"
                            src="/assets/images/header-logo.png"
                            alt="View on Google Maps"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default PropertyLocation;