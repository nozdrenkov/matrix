import { Process } from "./schema";

export const processes: Process[] = [
  {
    id: "ACCR",
    name: "Accretion vs Dissolution",
    inputs: "carbonate ions, calcium, ATP, sunlight, zooplankton",
    outputs: "CaCO₃, habitat, structure",
    scale: "Very small scale, impacts large scale",
    more: "If accretion is happening, it indicates low stress",
  },
  {
    id: "PHOTO",
    name: "Photosynthesis - Respiration",
    inputs: "Photosynthesis: sunlight, CO₂, water; Respiration: sugars, O₂",
    outputs: "Photosynthesis: O₂, sugars; Respiration: CO₂, ATP",
    more: "Indicator of reef metabolic balance and potential degradation.",
  },
  {
    id: "BIOEROSION",
    name: "Bioerosion",
    desc:
      "Parrotfish and urchins graze (scrape/gouge calcium " +
      "carbonate turning it into sand), and boring sponges " +
      "chemically dissolve the carbonate framework.",
    more:
      "A key process impacting reef structure; consider as " +
      "a complement to accretion measurements.",
  },
  {
    id: "MICRB",
    name: "Microbial Community Function",
    desc:
      "Involves nutrient recycling, organic matter consumption " +
      "(microbial loop), viral predation, and benthic suspension feeding.",
    more:
      "Measured via flow cytometry and metagenomic " +
      "sequencing; critical for overall reef health.",
  },
  // Optionally add ranked processes like Primary Production, Secondary Production, etc.
];
