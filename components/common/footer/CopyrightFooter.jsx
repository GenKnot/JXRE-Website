const CopyrightFooter = () => {
  return (
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-widget text-center">
            <p>
              &copy; {new Date().getFullYear()} JXRE Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
  );
};

export default CopyrightFooter;