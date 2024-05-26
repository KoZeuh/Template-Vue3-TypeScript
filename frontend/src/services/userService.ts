import apiClient from "@/apiAxios";
import { User } from "@/interfaces/user";

export const getUser = async (userId: string): Promise<User> => {
    try {
        const response = await apiClient.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const createUser = async (userData: User): Promise<User> => {
    try {
        const response = await apiClient.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Add more functions here as needed
