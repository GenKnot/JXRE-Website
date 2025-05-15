import Image from "next/image";

const PropertyLocation = ({ property }) => {
    if (!property) return null;

    // Create Google Maps URL with the property address
    const mapAddress = encodeURIComponent(`${property.address}, ${property.city}`);
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&q=${mapAddress}`;

    return (
        <>
            <div className="thumb">
                <div className="h400" id="map-canvas">
                    <div className="gmap_canvas">
                        <iframe
                            title="map"
                            className="gmap_iframe"
                            src={googleMapsUrl}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            width="100%"
                            height="400"
                            allowFullScreen
                        ></iframe>
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