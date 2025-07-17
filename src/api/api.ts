export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://rickandmortyapi.com/api';

export async function apiCall<T>(endpoint: string): Promise<T> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur lors de l\'appel API:', error);
        throw error;
    }
}
