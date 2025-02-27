'use client'

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const PropertyVideo = ({ property }) => {
    if (!property || (!property.video && !property.video_url)) return null;

    const [isOpen, setOpen] = useState(false);

    // Extract YouTube video ID from URL if it exists
    const getYoutubeId = (url) => {
        if (!url) return null;

        // Match YouTube URL patterns
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYoutubeId(property.video_url);
    const hasYoutubeVideo = !!videoId;
    const hasVideoFile = !!property.video;

    if (!hasYoutubeVideo && !hasVideoFile) return null;

    return (
        <>
            {hasYoutubeVideo && (
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId={videoId}
                    onClose={() => setOpen(false)}
                />
            )}

            <ul className="nav nav-tabs" id="propertyVideoTab" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#property-video"
                        role="tab"
                    >
                        Property Video
                    </a>
                </li>
            </ul>

            <div className="tab-content" id="propertyVideoTabContent">
                <div
                    className="tab-pane fade show active"
                    id="property-video"
                    role="tabpanel"
                >
                    <div className="property_video">
                        <div className="thumb">
                            {hasYoutubeVideo && (
                                <>
                                    <Image
                                        width={692}
                                        height={390}
                                        className="pro_img w100 w-100 cover"
                                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                        alt="Property video thumbnail"
                                    />
                                    <div className="overlay_icon">
                                        <div
                                            onClick={() => setOpen(true)}
                                            role="button"
                                            className="video_popup_btn red popup-youtube"
                                        >
                                            <span className="flaticon-play"></span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {!hasYoutubeVideo && hasVideoFile && (
                                <video
                                    width="100%"
                                    height="390"
                                    controls
                                    poster="/assets/images/background/video-placeholder.jpg"
                                >
                                    <source src={property.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyVideo;