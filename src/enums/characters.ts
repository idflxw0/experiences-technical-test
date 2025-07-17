export const CharacterStatus = {
    ALIVE: 'alive',
    DEAD: 'dead',
    UNKNOWN: 'unknown'
} as const;

export type CharacterStatusType = typeof CharacterStatus[keyof typeof CharacterStatus];

export const CharacterGender = {
    FEMALE: 'Female',
    MALE: 'Male',
    GENDERLESS: 'Genderless',
    UNKNOWN: 'unknown'
} as const;

export type CharacterGenderType = typeof CharacterGender[keyof typeof CharacterGender];

