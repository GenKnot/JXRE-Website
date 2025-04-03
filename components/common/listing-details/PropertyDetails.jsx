const PropertyDetails = ({property}) => {

    if (!property) return null;


    if (property.is_sold) {
        return (
            <div className="property-details-sold-notice">
                <p className="text-center">
                    <strong>This property has been sold.</strong> Detailed property information is no longer available for sold properties.
                </p>
                <style jsx>{`
                    .property-details-sold-notice {
                        background-color: #f8f9fa;
                        border-left: 4px solid #ff5a5f;
                        padding: 15px;
                        margin: 20px 0;
                        border-radius: 4px;
                    }
                `}</style>
            </div>
        );
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(price);
    };


    const fields = [
        { id: 'property-id', label: 'Property ID', value: property.id },
        { id: 'price', label: 'Price', value: formatPrice(property.price) },
        { id: 'year-built', label: 'Year Built', value: property.building_details?.year_built },
        { id: 'revenue', label: 'Revenue', value: property.revenue ? formatPrice(property.revenue) : null },
        { id: 'cost-per-unit', label: 'Cost per Unit', value: property.cost_per_unit ? formatPrice(property.cost_per_unit) : null },
        { id: 'multifamily', label: 'Multifamily', value: property.residential_units },
        { id: 'commercial-units', label: 'Commercial Units',
            value: property.commercial_units === 1 ? 'Without Property' :
                property.commercial_units >= 2 ? 'With Property' :
                    property.commercial_units },
        { id: 'parking', label: 'Parking',
            value: property.building_details?.has_garage !== undefined ?
                (property.building_details.has_garage ? 'Yes' : 'No') : null },
        { id: 'floors', label: 'Floors', value: property.building_details?.floors },
        { id: 'lot-area', label: 'Lot Area',
            value: property.building_details?.lot_area ?
                `${property.building_details.lot_area} Sq Ft` : null },
        { id: 'property-type', label: 'Property Type', value: property.building_details?.building_type },
        { id: 'property-status', label: 'Property Status', value: 'For Sale' },
        { id: 'assessment-year', label: 'Assessment Year', value: property.assessment_year },
        { id: 'cap-rate', label: 'Cap Rate', value: property.cap_rate ? `${property.cap_rate}%` : null },
        { id: 'grm', label: 'Gross Rent Multiplier', value: property.grm }
    ].filter(field => field.value !== null && field.value !== undefined);


    if (fields.length === 0) {
        return null;
    }

    return (
        <div className="property-details-grid">
            {fields.map(field => (
                <div className="detail-item" key={field.id}>
                    <p>
                        <strong>{field.label}:</strong> {field.value}
                    </p>
                </div>
            ))}

            <style jsx>{`
                .property-details-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 15px;
                    width: 100%;
                }
                .detail-item {
                    //background-color: #f9f9f9;
                    border-radius: 5px;
                    padding: 10px 15px;
                }
                .detail-item p {
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default PropertyDetails;