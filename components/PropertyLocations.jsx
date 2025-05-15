const PropertyLocations = ({ address, isSold = false }) => {
    if (!address) return null;

    const encodedAddress = encodeURIComponent(address);

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
                                src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyLocations;