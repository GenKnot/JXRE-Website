const CopyrightFooter = () => {
  return (
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-widget text-center">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} JXRE Asset Management. All rights reserved.
            </p>
            <p className="mb-3">
              Operating across Ontario and Quebec.
            </p>
            <p className="mt-3 mb-0" style={{ fontSize: '0.75rem', color: '#999', lineHeight: '1.5', maxWidth: '900px', margin: '0 auto' }}>
              This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy securities. Investments are offered only to qualified investors through applicable offering documents where required.
            </p>
          </div>
        </div>
      </div>
  );
};

export default CopyrightFooter;