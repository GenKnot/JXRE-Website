export const API_BASE_URL = 'https://api.jxre.ca';

// DEV
// export const API_BASE_URL = 'http://127.0.0.1:8000';

export const ENDPOINTS = {
    PROPERTIES: {
        FEATURED: `${API_BASE_URL}/api/properties/featured/`,
    },
};

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


export const PropertyAPI = {
    getFeaturedProperties: async () => {
        return fetchAPI(ENDPOINTS.PROPERTIES.FEATURED);
    },
};

export default {
    PropertyAPI,
};