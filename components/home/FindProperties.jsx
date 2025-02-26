'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {API_BASE_URL} from "@/constants/api";


const FindProperties = () => {
  const [propertyCounts, setPropertyCounts] = useState({
    Montreal: 0,
    Toronto: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyCounts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/properties/`);

        if (!response.ok) {
          throw new Error('Failed to fetch property data');
        }

        const data = await response.json();

        // Calculate counts by city
        const counts = {
          Montreal: 0,
          Toronto: 0
        };

        // Count properties by city
        data.results.forEach(property => {
          if (property.city in counts && !property.is_sold) {
            counts[property.city]++;
          }
        });

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
      name: "Montreal",
      number: propertyCounts.Montreal,
      column: "col-lg-6 col-xl-6",
    },
    {
      id: 2,
      img: "/t.jpg",
      name: "Toronto",
      number: propertyCounts.Toronto,
      column: "col-lg-6 col-xl-6",
    },
  ];

  return (
      <>
        {cityProperties.map((item) => (
            <div className={`col-lg-4 ${item.column}`} key={item.id}>
              <Link
                  href={`/listing?city=${item.name}`}
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
