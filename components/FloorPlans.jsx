import Image from "next/image";

const FloorPlans = ({ floorPlans }) => {
    if (!floorPlans || floorPlans.length === 0) return null;

    // Sort floor plans by floor number
    const sortedPlans = [...floorPlans].sort((a, b) => a.floor_number - b.floor_number);

    return (
        <div className="accordion" id="accordionFloorPlans">
            {sortedPlans.map((plan, index) => {
                const isFirst = index === 0;
                const headingId = `heading-floor-${plan.id}`;
                const collapseId = `collapse-floor-${plan.id}`;

                return (
                    <div className="card floor_plan" key={plan.id}>
                        <div id={headingId}>
                            <h2 className="mb-0">
                                <button
                                    className={`btn btn-link accordion-button ${isFirst ? '' : 'collapsed'}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded={isFirst ? "true" : "false"}
                                    aria-controls={collapseId}
                                >
                                    <ul className="mb0 d-flex align-items-center flex-wrap">
                                        <li className="d-inline-flex list-inline-item">Floor {plan.floor_number}</li>
                                    </ul>
                                </button>
                            </h2>
                        </div>
                        <div
                            id={collapseId}
                            className={`collapse ${isFirst ? 'show' : ''}`}
                            aria-labelledby={headingId}
                            data-bs-parent="#accordionFloorPlans"
                        >
                            <div className="card-body text-center">
                                <Image
                                    width={619}
                                    height={465}
                                    className="img-fluid w-100 h-100 cover"
                                    src={plan.image}
                                    alt={`Floor ${plan.floor_number} plan`}
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