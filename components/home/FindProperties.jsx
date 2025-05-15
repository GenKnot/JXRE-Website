'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {API_BASE_URL} from "@/constants/api";


const FindProperties = () => {
  const [propertyCounts, setPropertyCounts] = useState({
    Quebec: 0,
    Ontario: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyCounts = async () => {
      try {
        const counts = {
          Quebec: 0,
          Ontario: 0
        };

        for (const province of Object.keys(counts)) {
          const response = await fetch(`${API_BASE_URL}/api/properties/?province=${province}&page_size=1`);

          if (!response.ok) {
            throw new Error(`Get ${province} Error`);
          }

          const data = await response.json();
          counts[province] = data.count || 0;
        }

        setPropertyCounts(counts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching property counts:", error);
        setLoading(false);
      }
    };

    fetchPropertyCounts();
  }, []);


  const cityProperties = [
    {
      id: 1,
      img: "/m.jpg",
      name: "Quebec",
      number: propertyCounts.Quebec,
      column: "col-lg-6 col-xl-6",
    },
    {
      id: 2,
      img: "/t.jpg",
      name: "Ontario",
      number: propertyCounts.Ontario,
      column: "col-lg-6 col-xl-6",
    },
  ];

  return (
      <>
        {cityProperties.map((item) => (
            <div className={`col-lg-4 ${item.column}`} key={item.id}>
              <Link
                  href={`/listing?province=${item.name}`}
                  className="properti_city d-block"
              >
                <div className="thumb">
                  <Image
                      width={752}
                      height={352}
                      className="cover"
                      src={item.img}
                      alt={`${item.name} properties`}
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>{item.name}</h4>
                    {loading ? (
                        <p>Loading properties...</p>
                    ) : (
                        <p>{item.number} Properties</p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
        ))}
      </>
  );
};

export default FindProperties;
