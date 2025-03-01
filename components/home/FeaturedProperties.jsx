'use client'

import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import {useEffect, useState} from "react";
import {PropertyAPI} from "@/constants/api";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredProperties = await PropertyAPI.getFeaturedProperties();
        setProperties(featuredProperties); // 更新状态
      } catch (error) {
        console.error("Failed to fetch featured properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  if (loading) {
    return (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    );
  }

  let content = properties.map((item) => (
      <div className="item" key={item.id}>
        <div className="feat_property">
          <div className="thumb">
            <Image
                width={343}
                height={220}
                className="img-whp cover"
                src={item.featured_image?.image_url || "/assets/images/property/no-image.jpg"}
                alt={item.title}
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {item.is_featured && (
                    <li className="list-inline-item">
                      <a href="#">{item.city}</a>
                    </li>
                )}
                <li className="list-inline-item">
                  <a href="#">{item.is_sold ? "Sold" : "For Sale"}</a>
                </li>
              </ul>

              <Link href={`/listing-details/${item.id}`} className="fp_price">
                ${Number(item.price).toLocaleString()}
              </Link>
            </div>
          </div>

          <div className="details">
            <div className="tc_content">
              <p className="text-thm">
                {item.residential_units > 0 && item.commercial_units > 0
                    ? "Mixed Use"
                    : item.residential_units > 0
                        ? "Residential"
                        : "Commercial"}
              </p>
              <h4>
                <Link href={`/listing-details/${item.id}`}>{item.title}</Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.address}, {item.city}
              </p>

              <ul className="prop_details mb0">
                <li className="list-inline-item">
                  <a href="#" className="text-thm">
                    Residential Units: {item.residential_units}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-thm">
                    Commercial Units: {item.commercial_units}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  ));

  return (
      <>
        <Slider {...settings} arrows={false}>
          {content}
        </Slider>
      </>
  );
};

export default FeaturedProperties;
