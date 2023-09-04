export enum ClefType {
    TREBLE = "treble",
    BASS = "bass",
    ALTO = "alto",
    TENOR = "tenor",
    PERCUSSION = "percussion",
    MEZZO_SOPRANO = "mezzo-soprano",
    BARITONE = "baritone",
    SOPRANO = "soprano",
}

export type TimeSignature = {
    quantity: number;
    value: number;
}