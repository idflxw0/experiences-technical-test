import type { Character } from '../types';

interface CharacterCardProps {
    character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
    return (
        <div className="character-card">
            <img
                src={character.image}
                alt={`${character.name} portrait`}
                className="character-image"
            />
            <div className="character-info">
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
                <p className={`status ${character.status.toLowerCase()}`}>
                    Status: {character.status}
                </p>
            </div>
        </div>
    );
}
