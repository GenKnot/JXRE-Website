'use client'

import agentsTeam from "../../data/agents";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const Team = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        {agentsTeam.slice(0, 6).map((item) => (
          <div className="item" key={item.id}>
            <div className="team_member text-center" style={{ padding: "20px 10px" }}>
              {/* Avatar */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #e8e8e8",
                  flexShrink: 0,
                  position: "relative",
                }}>
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={item.img}
                    alt={item.name}
                  />
                </div>
              </div>

              <div className="details">
                <h4 style={{ marginBottom: "4px" }}>
                  <Link href={`/agent-details/${item.id}`}>{item.name}</Link>
                </h4>
                <p style={{ marginBottom: "8px" }}>{item.type}</p>
                <ul className="social_icon" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center", gap: "8px" }}>
                  {item.socialList.map((social, i) => (
                    <li className="list-inline-item" key={i}>
                      <a
                        href={social.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`fa ${social.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Team;
