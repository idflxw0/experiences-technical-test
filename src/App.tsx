import { CharacterCard, StatusFilter, SearchBar, LoadingSpinner, ErrorMessage } from './components';
import { useCharacters } from './hooks';

export function App() {
  const {
    characters,
    loading,
    searching,
    error,
    selectedStatus,
    searchTerm,
    handleStatusChange,
    handleSearchChange
  } = useCharacters();

  if (loading && !searching && characters.length === 0) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="app">
      <header className="header">
        <h1>Rick & Morty Characters</h1>
      </header>

      <div className="filters">
        <StatusFilter
          selectedStatus={selectedStatus}
          onStatusChange={handleStatusChange}
        />
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          searching={searching}
        />
      </div>

      <main className="main">
        {characters.length === 0 ? (
          <p className="no-results">No characters found.</p>
        ) : (
          <div className="characters-grid">
            {characters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
