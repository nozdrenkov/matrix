import { Process } from "./schema";

export const processes: Process[] = [
  {
    id: "ACCR",
    name: "Accrecion vs dissolution",
    inputs:
      "carbonate ions, calcium, ATP (from sunlight through algae or zooplankton)," +
      "sunlight (indirect through algae) or zooplankton (indirect through feeding) " +
      "(both sunlight/sugars from algae and zooplankton are converted to ATP by corals)",
    outputs: "CaCO3, habitat, structure that dissipates wave energy",
    scale: "Very small scale, impacts large scale",
    more: `If accretion is happening it means there’s no other stressors, so it’s important to measure.`,
  },
  {
    id: "PHOTO",
    name: "Photosynthesis - Respiration",
  },
];
