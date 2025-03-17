'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const FeatureProperties = ({ properties = [] }) => {
  if (!properties || properties.length === 0) return null;

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  return (
      <>
        <Slider {...settings} arrows={false}>
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
                          <a href="#">{item.city}</a>
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
                      <h4 className="posr color-white">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </Slider>
      </>
  );
};

export default FeatureProperties;