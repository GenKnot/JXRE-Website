const PropertyLocations = ({ address, isSold = false }) => {

    if (!address) return null;


    if (isSold) {
        return (
            <div className="location-sold-notice">
                <p className="text-center">
                    <strong>This property has been sold.</strong> Exact location information is no longer displayed for sold properties.
                </p>
                <style jsx>{`
                    .location-sold-notice {
                        background-color: #f8f9fa;
                        border-left: 4px solid #ff5a5f;
                        padding: 15px;
                        margin: 20px 0;
                        border-radius: 4px;
                    }
                `}</style>
            </div>
        );
    }

    const encodedAddress = encodeURIComponent(address);

    return (
        <>
            <div className="thumb">
                <div className="h400" id="map-canvas">
                    <div className="mapouter" style={{position: 'relative', textAlign: 'right', width: '100%', height: '400px'}}>
                        <div className="gmap_canvas" style={{overflow: 'hidden', background: 'none !important', width: '100%', height: '400px'}}>
                            <iframe
                                className="gmap_iframe"
                                style={{width: '100%', height: '400px'}}
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyLocations;