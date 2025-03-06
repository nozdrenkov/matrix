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
  {
    id: "ALK",
    name: "Alkalinity",
    desc:
      "Represents the capacity of a solution to buffer acidity; " +
      "high values indicate a high concentration of buffering ions.",
    processes: ["ACCR"],
    more: "Important for assessing net community calcification.",
  },
  {
    id: "VMR",
    name: "Virus-to-Microbe Ratio",
    desc: "A proxy for viral predation dynamics within the microbial community.",
    processes: ["MICRB"],
    more: "Higher ratios may indicate microbial imbalance.",
  },
  {
    id: "MIC_COMP",
    name: "Microbial Community Composition",
    desc: "Represents the diversity and functional genes within the microbial community.",
    processes: ["MICRB"],
    more: "Provides insight into nutrient recycling and disease potential.",
  },
];
