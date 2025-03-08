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
  {
    id: "ADCP",
    name: "Acoustic Doppler Current Profiler",
    variables: ["CURR", "WCD"],
    desc: "Measures water current velocities and direction at various depths using sound waves.",
    cost: "$5000-20000",
    more: "Provides continuous monitoring of water movement patterns; crucial for understanding circulation patterns.",
  },
  {
    id: "SECCHI",
    name: "Secchi Disk Measurement",
    variables: ["WTR", "VIS"],
    desc: "Measures water transparency and turbidity using a simple black and white disk.",
    cost: "$50-200",
    more: "Traditional but reliable method; best performed at consistent times of day for comparable results.",
  },
  {
    id: "PAM",
    name: "Pulse Amplitude Modulated Fluorometry",
    variables: ["PHOT", "STR"],
    desc: "Measures photosynthetic efficiency and stress in marine plants and corals.",
    cost: "$3000-15000",
    more: "Non-invasive technique; ideal for monitoring coral and seagrass health over time.",
  },
  {
    id: "EDNA",
    name: "Environmental DNA Analysis",
    variables: ["BIO_DIV", "SP_COMP"],
    desc: "Detects species presence through DNA traces in water samples.",
    cost: "$2000-8000",
    more: "Powerful tool for biodiversity assessment; requires careful sample handling and processing.",
  },
  {
    id: "HYDRO",
    name: "Hydrophone Acoustic Monitoring",
    variables: ["NOISE", "MAM_ACT"],
    desc: "Records underwater sounds to monitor marine mammal activity and anthropogenic noise.",
    cost: "$1000-12000",
    more: "Long-term deployment possible; valuable for studying marine mammal behavior and ocean noise pollution.",
  }
];
