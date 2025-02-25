export const API_BASE_URL = 'http://localhost:8000';
// PROD
// export const API_BASE_URL = 'https://api.yoursite.com';

export const ENDPOINTS = {
    PROPERTIES: {
        FEATURED: `${API_BASE_URL}/api/properties/featured/`,
    },
};

/**
 * 基础fetch封装
 */
async function fetchAPI(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`API Failed: ${url}`, error);
        throw error;
    }
}

/**
 * 物业相关API
 */
export const PropertyAPI = {
    // 获取精选物业
    getFeaturedProperties: async () => {
        return fetchAPI(ENDPOINTS.PROPERTIES.FEATURED);
    },
};

export default {
    PropertyAPI,
};