export type Pitch = {
    name: string;
    octave: number;
}

export type NoteProps = {
    duration: number;
    pitch: Pitch;
}