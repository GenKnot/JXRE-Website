'use client'

import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const FeatureProperties = ({ properties = [] }) => {
  if (!properties || properties.length === 0) {
    return null;
  }


  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div className="featured-slider-container">
        <Slider {...settings}>
          {properties.map((item) => (
              <div className="item" key={item.id}>
                <div className="feat_property home7">
                  <div className="thumb">
                    <Link href={`/listing-details/${item.id}`}>
                      <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                        <Image
                            src={item.featured_image?.image_url || "/assets/images/property/no-image.jpg"}
                            alt={item.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                    </Link>

                    <div className="thmb_cntnt">
                      <ul className="tag mb0">
                        <li className="list-inline-item">
                          <a href="#">{item.province}</a>
                        </li>
                        {item.is_sold && (
                            <li className="list-inline-item">
                              <a href="#" className="">Sold</a>
                            </li>
                        )}
                      </ul>
                      <Link href={`/listing-details/${item.id}`} className="fp_price">
                        {item.is_sold ? (
                            <span className="">Sold</span>
                        ) : (
                            `$${Number(item.price).toLocaleString()}`
                        )}
                      </Link>
                      <h4 className="posr color-white text-white">
                        <Link href={`/listing-details/${item.id}`}><p className="text-white">{item.title}</p></Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </Slider>


        <style jsx global>{`
        .featured-slider-container .slick-slide {
          padding: 5px;
        }
        .featured-slider-container .slick-prev,
        .featured-slider-container .slick-next {
          z-index: 10;
          top: 50%;
          transform: translateY(-50%);
        }
        .featured-slider-container .slick-prev {
          left: 10px;
        }
        .featured-slider-container .slick-next {
          right: 10px;
        }
        .featured-slider-container .slick-prev:before,
        .featured-slider-container .slick-next:before {
          color: #ff5a5f;
        }
      `}</style>
      </div>
  );
};

export default FeatureProperties;