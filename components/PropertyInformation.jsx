const PropertyInformation = ({ property }) => {
    if (!property || !property.unit_distribution) return null;

    const distribution = property.unit_distribution;
    const totalUnits = property.residential_units + property.commercial_units;

    const unitTypes = [
        { name: 'Sto', count: distribution.studio || 0, icon: 'flaticon-house' },
        { name: '1½', count: distribution.one_half || 0, icon: 'flaticon-house-1' },
        { name: '2½', count: distribution.two_half || 0, icon: 'flaticon-house-2' },
        { name: '3½', count: distribution.three_half || 0, icon: 'flaticon-house-3' },
        { name: '4½', count: distribution.four_half || 0, icon: 'flaticon-house-4' },
        { name: '5½', count: distribution.five_half || 0, icon: 'flaticon-house-5' },
        { name: '6½+', count: distribution.six_plus || 0, icon: 'flaticon-house-6' }
    ];

    return (
        <div className="row">
            <div className="col-12 mb-4">
                <h5 className="fw-bold">Unit Distribution</h5>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                    {unitTypes.map((unit, index) => (
                        <div
                            key={index}
                            className="unit-info-box text-center mb-3 mx-1"
                            style={{
                                flex: '0 0 calc(25% - 15px)',
                                maxWidth: 'calc(25% - 15px)',
                                padding: '15px 10px',
                                backgroundColor: unit.count > 0 ? '#fff8f8' : '#f8f9fa',
                                borderRadius: '8px',
                                boxShadow: unit.count > 0 ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
                                opacity: unit.count > 0 ? 1 : 0.7
                            }}
                        >
                            <div
                                className="unit-icon mb-2"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: unit.count > 0 ? '#ff5a5f' : '#d1d7dc',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto'
                                }}
                            >
                                <span style={{ color: 'white', fontWeight: 'bold' }}>{unit.name}</span>
                            </div>
                            <p className="mb-0" style={{ fontWeight: unit.count > 0 ? 'bold' : 'normal' }}>
                                {unit.count} {unit.count === 1 ? 'unit' : 'units'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 总计 */}
            <div className="col-12">
                <div className="unit-summary p-3" style={{ backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
                    <div className="row">
                        <div className="col-md-4 text-center mb-2 mb-md-0">
                            <h6>Total Units</h6>
                            <p className="mb-0 fw-bold">{totalUnits}</p>
                        </div>
                        <div className="col-md-4 text-center mb-2 mb-md-0">
                            <h6>Residential Units</h6>
                            <p className="mb-0 fw-bold">{property.residential_units}</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Commercial Units</h6>
                            <p className="mb-0 fw-bold">{property.commercial_units}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyInformation;