import { Method } from "./schema";

export const methods: Method[] = [
  {
    id: "PHTGR",
    name: "Photogrammetry using 2 GoPros",
    variables: ["RG"],
  },
  {
    id: "SEAPHOX",
    name: "SeapHOx CTD Measurement",
    variables: ["ALK", "DO", "pH"], // include TA, DIC if defined elsewhere
    desc: "Measures water chemistry parameters (DO, pH, alkalinity) to infer net community calcification and production.",
    cost: "$100-5000",
    more: "Consider cheaper alternatives; typically deployed every 100 meters or seasonally.",
  },
  {
    id: "FLOWCYTO",
    name: "Flow Cytometry",
    variables: ["VMR"],
    desc: "Assesses viral and microbial abundances, serving as a proxy for microbial community dynamics.",
    cost: "$500-2000",
    more: "Recommend 5-10 measurements over 2 weeks to capture temporal variability.",
  },
  {
    id: "METAGENOME",
    name: "Metagenomic Sequencing",
    variables: ["MIC_COMP"],
    desc: "Determines the relative abundance of microbial taxa and functional genes, providing deep insights into community health.",
    cost: "$1000-10000",
    more: "Highly information rich; ideally paired with flow cytometry for a complete picture.",
  },
];
