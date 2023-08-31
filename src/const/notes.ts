import { BarProps } from "../types/bar";
import { ClefType } from "../types/general";

export const noteNames = [
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B"
]

export const noteNamesFromCKey = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
]

export const trebleClefNotes = [
    "G5",
    "F5",
    "E5",
    "D5",
    "C5",
    "B4",
    "A4",
    "G4",
    "F4",
    "E4",
    "D4",
]

export const initialBars: BarProps[] = [
    {
      clef: ClefType.TREBLE,
      timeSignature: {
        value: 4,
        quantity: 4,
      },
      notes: [
        {
          duration: 4,
          pitch: {
            name: "G",
            octave: 4,
          },
        },
        {
          duration: 4,
          pitch: {
            name: "F",
            octave: 5,
          },
        },
      ],
    },
    {
      clef: ClefType.TREBLE,
      timeSignature: {
        value: 4,
        quantity: 3,
      },
      notes: [
        {
          duration: 4,
          pitch: {
            name: "A#",
            octave: 4,
          },
        },
        {
          duration: 2,
          pitch: {
            name: "A",
            octave: 4,
          },
        },
      ],
    },
    {
      clef: ClefType.TREBLE,
      timeSignature: {
        value: 4,
        quantity: 4,
      },
      notes: [
        {
          duration: 4,
          pitch: {
            name: "G",
            octave: 4,
          },
        },
        {
          duration: 4,
          pitch: {
            name: "F",
            octave: 5,
          },
        },
      ],
    },
    {
      clef: ClefType.TREBLE,
      timeSignature: {
        value: 4,
        quantity: 3,
      },
      notes: [
        {
          duration: 4,
          pitch: {
            name: "C",
            octave: 4,
          },
        },
        {
          duration: 2,
          pitch: {
            name: "A",
            octave: 4,
          },
        },
      ],
    },
    {
      clef: ClefType.TREBLE,
      timeSignature: {
        value: 4,
        quantity: 4,
      },
      notes: [
        {
          duration: 4,
          pitch: {
            name: "G",
            octave: 4,
          },
        },
        {
          duration: 4,
          pitch: {
            name: "F",
            octave: 5,
          },
        },
      ],
    },
    {
      clef: ClefType.TREBLE,
      timeSignature: {
        value: 4,
        quantity: 3,
      },
      notes: [
        {
          duration: 4,
          pitch: {
            name: "C",
            octave: 4,
          },
        },
        {
          duration: 2,
          pitch: {
            name: "A",
            octave: 4,
          },
        },
      ],
    },
  ];