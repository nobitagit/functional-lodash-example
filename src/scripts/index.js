import { chain } from "lodash-es";

const players = [
  { player: "Aleksandar Mitrovic", goals: 10, shots: 118 },
  { player: "Mohamed Salah", goals: 19, shots: 116 },
  { player: "Harry Kane", goals: 17, shots: 110 },
  { player: "Sergio Agüero", goals: 19, shots: 99 },
  { player: "Raùl Jiménez", goals: 12, shots: 96 },
  { player: "Paul Pogba", goals: 13, shots: 93 },
  { player: "Eden Hazard", goals: 16, shots: 86 },
  { player: "Pierre-Emerick Aubameyang", goals: 18, shots: 81 },
  { player: "Gylfi Sigurdsson", goals: 12, shots: 78 },
  { player: "Sadio Manè", goals: 18, shots: 77 }
];

// Sort players by goals scored and shots taken.
// If 2 players have the same number of goals, the one player
// with less shots on targets is ranked higher.
const result = chain(players)
  .orderBy(["goals", "shots"], ["desc", "asc"])
  .take(3)
  .map("player")
  .value();

console.log(result);
