import { memo } from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    searching?: boolean;
}

export const SearchBar = memo(function SearchBar({ searchTerm, onSearchChange, searching = false }: SearchBarProps) {
    return (
        <div className="search-bar">
            <label htmlFor="character-search">Search characters:</label>
            <div className="search-input-container">
                <input
                    id="character-search"
                    type="text"
                    placeholder="Enter character name..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                {searching && <span className="search-indicator">🔍</span>}
            </div>
        </div>
    );
});
