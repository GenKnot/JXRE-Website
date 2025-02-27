'use client'

import { useState } from "react";
import Image from "next/image";

const FloorPlans = ({ floorPlans }) => {
  const [activeFloor, setActiveFloor] = useState(floorPlans?.[0]?.floor_number || null);

  if (!floorPlans || floorPlans.length === 0) return null;

  return (
      <div className="accordion" id="accordionFloorPlans">
        {floorPlans.map((plan) => {
          const isActive = plan.floor_number === activeFloor;
          const headingId = `heading${plan.floor_number}`;
          const collapseId = `collapse${plan.floor_number}`;

          return (
              <div className="card floor_plan" key={plan.id}>
                <div id={headingId}>
                  <h2 className="mb-0">
                    <button
                        className={`btn btn-link accordion-button ${isActive ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isActive}
                        aria-controls={collapseId}
                        onClick={() => setActiveFloor(plan.floor_number)}
                    >
                      <ul className="mb0 d-flex align-items-center flex-wrap">
                        <li className="d-inline-flex list-inline-item">Floor {plan.floor_number}</li>
                        {plan.description && (
                            <li className="d-inline-flex list-inline-item">
                              {plan.description}
                            </li>
                        )}
                      </ul>
                    </button>
                  </h2>
                </div>
                <div
                    id={collapseId}
                    className={`collapse ${isActive ? 'show' : ''}`}
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionFloorPlans"
                >
                  <div className="card-body text-center">
                    <Image
                        width={619}
                        height={465}
                        className="img-fluid w-100 h-100 cover"
                        src={plan.image}
                        alt={`Floor Plan ${plan.floor_number}`}
                    />
                    {plan.description && <p>{plan.description}</p>}
                  </div>
                </div>
              </div>
          );
        })}
      </div>
  );
};

export default FloorPlans;