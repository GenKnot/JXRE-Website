const WhyChoose = ({ style = "" }) => {

  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Expert Market Knowledge",
      descriptions: `With deep expertise in Montreal and Toronto's real estate markets, we provide data-driven insights to help you make informed investment decisions.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Premium Multi-Unit Properties",
      descriptions: `We specialize in high-quality residential and mixed-use properties with strong financial fundamentals and excellent growth potential.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Transparent Financial Analysis",
      descriptions: `We provide comprehensive financial metrics including cap rates, ROI, and GRM to ensure you understand the true value of each investment opportunity.`,
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
