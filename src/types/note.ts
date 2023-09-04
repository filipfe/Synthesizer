export type Pitch = {
    name: string;
    octave: number;
}

export type NoteProps = {
    duration: number;
    pitch: Pitch;
    time: string;
    hasDot?: boolean;
}

export enum DurationType {
    WHOLE = 1,
    HALF = 2,
    QUARTER = 4,
    EIGHTH = 8,
    SIXTEENTH = 16,
    THIRTY_SECOND = 32,
    SIXTY_FOURTH = 64,
}

export enum NoteName {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
}