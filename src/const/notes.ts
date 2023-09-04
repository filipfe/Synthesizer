import { BarProps } from "../types/bar";
import { ClefType } from "../types/general";
import { DurationType } from "../types/note";

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

export const bassClefNotes = [
  "B3",
  "A3",
  "G3",
  "F3",
  "E3",
  "D3",
  "C3",
  "B2",
  "A2",
  "G2",
  "F2",
]

export const initialBars: BarProps[] = [
    {
      clef: ClefType.TREBLE,
      timeSignature: {
        quantity: 11,
        value: 4,
      },
      notes: [
        {
          duration: DurationType.QUARTER,
          time: "0:1",
          pitch: {
            name: "A#",
            octave: 2,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:2",
          pitch: {
            name: "A",
            octave: 2,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:3",
          pitch: {
            name: "D",
            octave: 3,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:4",
          pitch: {
            name: "C",
            octave: 4,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:5",
          pitch: {
            name: "F",
            octave: 4,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:6",
          pitch: {
            name: "E",
            octave: 4,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:7",
          pitch: {
            name: "G",
            octave: 4,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:8",
          pitch: {
            name: "D",
            octave: 4,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:9",
          pitch: {
            name: "D",
            octave: 3,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:10",
          pitch: {
            name: "A",
            octave: 2,
          },
        },
        {
          duration: DurationType.QUARTER,
          time: "0:11",
          pitch: {
            name: "C",
            octave: 3,
          },
        },
      ],
    },
  ];