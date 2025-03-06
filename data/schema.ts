// Describes fundamental processes happening in coral reef ecosystems.
type Process = {
  id: string; // Unique identifier
  name: string; // Process name
  desc?: string; // Brief description of the process
  inputs?: string; // Inputs of the process
  outputs?: string; // Outputs of the process
  scale?: string; // At what scale is it happening
  more?: string; // Add anything else that doesn't fit the schema, and we will modify the schema later.
};

// Multiple variables quantify a process. And one variable could quantify multiple processes.
type Variable = {
  id: string; // Unique identifier
  name: string; // Variable name
  desc?: string; // Description
  processes: string[]; // Set of Process IDs this variable quantifies.
  more?: string; // Add anything else that doesn't fit the schema, and we will modify the schema later.
};

// A method of measuring a variable. You can measure multiple variables with one method,
// e.g. photogrammetry could measure benthic cover persentage and rugosity.
type Method = {
  id: string; // Unique identifier
  name: string; // Variable name
  variables: string[]; // Variable IDs this method is measuring
  desc?: string; // Description
  cost?: string; // How expensive is this per one sample? Approximate range like" "$100-5000".
  more?: string; // Add anything else that doesn't fit the schema, and we will modify the schema later.
};

// An action that we take to try protect/restore the ecosystem.
type Intervention = {
  id: string; // Unique identifier
  name: string; // Intervention name
  desc?: string; // Description
  cost?: string; // How expensive is this intervention?
  inputs?: string[]; // Which variables tell us that we need to do this? Important first.
  outputs?: string[]; // Which variables this intervention would likely change? Important first.
  more?: string; // Add anything else that doesn't fit the schema, and we will modify the schema later.
};

// Ecosystem service that a coral reef providing us.
type EcosystemService = {
  id: string; // Unique identifier
  name: string; // Ecosystem Service name
  desc?: string; // Description
  variables?: string[]; // Which variables affect it the most?
  more?: string; // Add anything else that doesn't fit the schema, and we will modify the schema later.
};

export type { Process, Variable, Method, Intervention, EcosystemService };
