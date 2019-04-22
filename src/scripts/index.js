import { flow, orderBy, take, map, partial } from "lodash-es";

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
const __ = partial.placeholder;
// Sort players by goals scored and shots taken.
// If 2 players have the same number of goals, the one player
const result = flow(
  _players => orderBy(_players, ["goals", "shots"], ["desc", "asc"]),
  _players => take(_players, 3),
  _players => map(_players, "player")
)(players);

console.log(result);
