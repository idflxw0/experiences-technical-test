import type { CharacterStatusType } from '../enums';

export interface Character {
    id: number;
    name: string;
    status: CharacterStatusType;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}