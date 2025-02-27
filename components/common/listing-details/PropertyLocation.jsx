'use client';

import {useEffect, useRef} from 'react';

const PropertyLocation = ({address}) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = initializeMap;
            document.head.appendChild(script);
        };

        const initializeMap = () => {
            if (!window.google || !address) return;

            const geocoder = new window.google.maps.Geocoder();

            geocoder.geocode({address}, (results, status) => {
                if (status === 'OK' && results[0]) {
                    const map = new window.google.maps.Map(mapRef.current, {
                        center: results[0].geometry.location,
                        zoom: 15,
                    });

                    new window.google.maps.Marker({
                        map,
                        position: results[0].geometry.location,
                        title: address,
                    });
                } else {
                    console.error('Geocode was not successful for the following reason:', status);
                }
            });
        };

        if (window.google && window.google.maps) {
            initializeMap();
        } else {
            loadGoogleMapsScript();
        }

        return () => {
            const googleMapsScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
            if (googleMapsScript) {
                googleMapsScript.remove();
            }
        };
    }, [address]);

    return (
        <>
            <div className="thumb">
                <div className="h400" id="map-canvas" ref={mapRef}>
                    {/* Google Maps will be loaded here */}
                </div>
            </div>
        </>
    );
};

export default PropertyLocation;