import { useState, useEffect, useCallback } from 'react';
import { getCharacters, getCharactersByStatus, searchCharactersByName } from '../api/queries/characters';
import type { Character } from '../types';
import type { CharacterStatusType } from '../enums';

export function useCharacters() {
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<CharacterStatusType | 'all'>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const handleStatusChange = useCallback(async (status: CharacterStatusType | 'all') => {
        setSelectedStatus(status);
        setError(null);

        try {
            setLoading(true);
            const data = status === 'all'
                ? await getCharacters()
                : await getCharactersByStatus(status);
            setAllCharacters(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to filter characters');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        handleStatusChange('all');
    }, [handleStatusChange]);


    //I'm using debounce search effect
    useEffect(() => {
        if (!searchTerm.trim()) {
            handleStatusChange(selectedStatus);
            return;
        }

        const timeoutId = setTimeout(async () => {
            try {
                setSearchLoading(true);
                setError(null);
                const data = await searchCharactersByName(searchTerm);
                setAllCharacters(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to search characters');
                setAllCharacters([]);
            } finally {
                setSearchLoading(false);
            }
        }, 500); // 500ms before executing search

        return () => clearTimeout(timeoutId);
    }, [searchTerm, selectedStatus, handleStatusChange]);

    const handleSearchChange = useCallback((term: string) => {
        setSearchTerm(term);
    }, []);

    return {
        characters: allCharacters,
        loading: loading || searchLoading,
        searching: searchLoading,
        error,
        selectedStatus,
        searchTerm,
        handleStatusChange,
        handleSearchChange
    };
}