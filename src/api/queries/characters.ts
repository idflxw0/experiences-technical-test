import { apiCall } from '../api';
import type { ApiResponse, Character } from '../../types';
import type { CharacterStatusType } from '../../enums';

export async function getCharacters(): Promise<Character[]> {
    const response = await apiCall<ApiResponse>('/character');
    return response.results;
}

export async function getCharactersByPage(page: number = 1): Promise<ApiResponse> {
    return await apiCall<ApiResponse>(`/character?page=${page}`);
}

export async function getCharactersByStatus(status: CharacterStatusType): Promise<Character[]> {
    const response = await apiCall<ApiResponse>(`/character?status=${status}`);
    return response.results;
}

export async function searchCharactersByName(name: string): Promise<Character[]> {
    const response = await apiCall<ApiResponse>(`/character?name=${name}`);
    return response.results;
}

export async function getFilteredCharacters(
    status?: CharacterStatusType,
    name?: string
): Promise<Character[]> {
    let endpoint = '/character?';
    const params = [];

    if (status) {
        params.push(`status=${status}`);
    }

    if (name) {
        params.push(`name=${name}`);
    }

    endpoint += params.join('&');

    const response = await apiCall<ApiResponse>(endpoint);
    return response.results;
}