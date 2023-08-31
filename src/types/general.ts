export enum ClefType {
    TREBLE,
    BASS,
    ALTO,
    TENOR
}

export type TimeSignature = {
    quantity: number;
    value: number;
}