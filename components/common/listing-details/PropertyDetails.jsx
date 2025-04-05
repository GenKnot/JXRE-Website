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
        if (!price && price !== 0) return '';
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(price);
    };

    // 判断是否是住宅类型(House/Townhouse/Condo)
    const isResidentialType = property.is_house || property.is_townhouse || property.is_condo;

    // 根据不同的属性类型和状态创建显示字段
    let fields = [
        { id: 'property-id', label: 'Property ID', value: property.id },
    ];

    // 根据属性状态添加价格字段
    if (property.property_status === 'for_lease') {
        fields.push({ id: 'monthly-rent', label: 'Monthly Rent', value: formatPrice(property.monthly_rent) });
    } else {
        fields.push({ id: 'price', label: 'Price', value: formatPrice(property.price) });
    }

    // 添加通用字段
    fields = [
        ...fields,
        { id: 'year-built', label: 'Year Built', value: property.building_details?.year_built },
        { id: 'property-type', label: 'Property Type', value:
                property.is_house ? 'House' :
                    property.is_townhouse ? 'Townhouse' :
                        property.is_condo ? 'Condo' :
                            property.building_details?.building_type || 'N/A'
        },
        { id: 'property-status', label: 'Property Status', value:
                property.property_status === 'for_lease' ? 'For Lease' :
                    property.property_status === 'for_sale' ? 'For Sale' : 'For Sale'
        }
    ];

    // 根据属性类型添加特定字段
    if (isResidentialType) {
        // 住宅类型特有字段
        fields = [
            ...fields,
            { id: 'bedrooms', label: 'Bedrooms', value: property.bedrooms },
            { id: 'bathrooms', label: 'Bathrooms', value: property.bathrooms }
        ];
    } else {
        // 多单元/商业类型特有字段
        if (property.residential_units > 0) {
            fields.push({ id: 'residential-units', label: 'Residential Units', value: property.residential_units });
        }

        if (property.commercial_units > 0) {
            fields.push({
                id: 'commercial-units',
                label: 'Commercial Units',
                value: property.commercial_units === 1 ? 'Without Property' :
                    property.commercial_units >= 2 ? 'With Property' : property.commercial_units
            });
        }

        // 财务信息
        if (property.revenue) {
            fields.push({ id: 'revenue', label: 'Revenue', value: formatPrice(property.revenue) });
        }

        if (property.cost_per_unit) {
            fields.push({ id: 'cost-per-unit', label: 'Cost per Unit', value: formatPrice(property.cost_per_unit) });
        }

        if (property.cap_rate) {
            fields.push({ id: 'cap-rate', label: 'Cap Rate', value: `${property.cap_rate}%` });
        }

        if (property.grm) {
            fields.push({ id: 'grm', label: 'Gross Rent Multiplier', value: property.grm });
        }
    }

    // 添加建筑特性
    if (property.building_details) {
        if (property.building_details.has_garage) {
            fields.push({ id: 'garage', label: 'Parking', value: 'Yes' });
        }

        if (property.building_details.floors) {
            fields.push({ id: 'floors', label: 'Floors', value: property.building_details.floors });
        }

        if (property.building_details.lot_area) {
            fields.push({ id: 'lot-area', label: 'Lot Area', value: `${property.building_details.lot_area} Sq Ft` });
        }

        if (property.building_details.zoning) {
            fields.push({ id: 'zoning', label: 'Zoning', value: property.building_details.zoning });
        }
    }

    // 评估信息
    if (property.assessment_year) {
        fields.push({ id: 'assessment-year', label: 'Assessment Year', value: property.assessment_year });

        if (property.land_value) {
            fields.push({ id: 'land-value', label: 'Land Value', value: formatPrice(property.land_value) });
        }

        if (property.building_value) {
            fields.push({ id: 'building-value', label: 'Building Value', value: formatPrice(property.building_value) });
        }

        if (property.total_value) {
            fields.push({ id: 'total-value', label: 'Total Value', value: formatPrice(property.total_value) });
        }
    }

    // 过滤掉空值
    fields = fields.filter(field => field.value !== null && field.value !== undefined && field.value !== '');

    // 如果没有字段显示，返回null
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