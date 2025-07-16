import axios from 'axios';

// const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const BASE_URL = "http://localhost:3001";

export const postData = async (endpoint: string, data: Record<string, unknown>) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
        return response;
    } catch (error: unknown) {
        // Optionally handle error more gracefully
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        }
        throw error;
    }
};

// Example usage:
// postData('/appointments', { name: 'John', date: '2024-06-01' })
