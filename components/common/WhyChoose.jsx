const WhyChoose = ({ style = "" }) => {

  const toolsContent = [
    {
      id: 1,
      icon: "flaticon-home-1",
      title: "Mortgage Calculator",
      descriptions: "Calculate your monthly mortgage payments and plan your investment.",
      link: "https://www.ratehub.ca/mortgage-payment-calculator",
    },
    {
      id: 2,
      icon: "flaticon-document",
      title: "Quebec Welcome Tax",
      descriptions: "Estimate the welcome tax (droits de mutation) for properties in Quebec.",
      link: "https://www.ratehub.ca/land-transfer-tax-quebec",
    },
    {
      id: 3,
      icon: "flaticon-document",
      title: "Ontario Land Transfer Tax",
      descriptions: "Calculate the land transfer tax for your Ontario property purchase.",
      link: "https://www.ratehub.ca/land-transfer-tax-ontario",
    },
    {
      id: 4,
      icon: "flaticon-profit",
      title: "CMHC Rental Market Report",
      descriptions: "View average rents, vacancy rates and market trends across Canada.",
      link: "https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/rental-market-reports-major-centres",
    },
    {
      id: 5,
      icon: "flaticon-invoice",
      title: "Quebec Rental Board (TAL)",
      descriptions: "Check annual rent increase guidelines and landlord regulations in Quebec.",
      link: "https://www.tal.gouv.qc.ca/en",
    },
    {
      id: 6,
      icon: "flaticon-layers",
      title: "Ontario Landlord Tenant Board",
      descriptions: "Access rent increase guidelines and tenancy rules for Ontario landlords.",
      link: "https://tribunalsontario.ca/ltb/",
    },
  ];

  return (
    <>
      {toolsContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <div className={`why_chose_us ${style}`} style={{cursor: 'pointer', transition: 'transform 0.2s'}}>
              <div className="icon">
                <span className={item.icon}></span>
              </div>
              <div className="details">
                <h4>{item.title}</h4>
                <p>{item.descriptions}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
