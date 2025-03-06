import { Variable } from "./schema";

export const variables: Variable[] = [
  {
    id: "NCC",
    name: "Net community calcification",
    desc: "Rate of ...",
    processes: ["ACCR"],
  },
  {
    id: "NCP",
    name: "Net community production",
    desc: "Rate of ...",
    processes: ["ACCR"],
  },
  {
    id: "RG",
    name: "Rugosity",
    processes: ["ACCR"],
  },
];
