"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Process, Variable, Method } from "../data/schema";
import { processes } from "../data/processes";
import { variables } from "../data/variables";
import { methods } from "../data/methods";
import React from "react";

const entities = [
  { name: "Processes", data: processes },
  { name: "Variables", data: variables },
  { name: "Methods", data: methods },
];

const getKeysFromObjects = <T extends object>(items: T[]): string[] => {
  return Array.from(new Set(items.flatMap((item) => Object.keys(item))));
};

const entityKeys = entities.map((entity: any) =>
  getKeysFromObjects(entity.data)
);

const _COLOURS = [
  ["bg-blue-200", "bg-blue-50"],
  ["bg-green-200", "bg-green-50"],
  ["bg-purple-200", "bg-purple-50"],
  ["bg-yellow-200", "bg-yellow-50"],
  ["bg-indigo-200", "bg-indigo-50"],
];

const headColour = (index) => _COLOURS[index % _COLOURS.length][0];
const cellColour = (index) => _COLOURS[index % _COLOURS.length][1];

function cartesianProduct<T>(arrays: T[][]): T[][] {
  return arrays.reduce(
    (acc, curr) => acc.flatMap((x) => curr.map((y) => [...x, y])),
    [[]] as T[][]
  );
}

// outerJoin includes a null option for each array.
function outerJoin<T>(...arrays: T[][]): (T | null)[][] {
  const options = arrays.map((arr) => [null, ...arr]);
  return cartesianProduct(options);
}

function isValidCombination(
  combo: [Process | null, Variable | null, Method | null]
): boolean {
  const [p, v, m] = combo;
  if (p && v && !v.processes.includes(p.id)) return false;
  if (v && m && !m.variables.includes(v.id)) return false;
  return true;
}

// Checks if combination 'a' dominates combination 'b'
function dominates<T>(a: (T | null)[], b: (T | null)[]): boolean {
  let strictlyBetter = false;
  for (let i = 0; i < a.length; i++) {
    // If b has a value, a must match it.
    if (b[i] !== null && a[i] !== b[i]) {
      return false;
    }
    // If a has a value where b is null, a is strictly more complete.
    if (a[i] !== null && b[i] === null) {
      strictlyBetter = true;
    }
  }
  return strictlyBetter;
}

// Remove dominated combinations from the list.
function removeDominated<T>(combinations: (T | null)[][]): (T | null)[][] {
  return combinations.filter(
    (combo) =>
      !combinations.some((other) => other !== combo && dominates(other, combo))
  );
}

const allData = () => {
  // 1. Generate all combinations (with null options)
  const allCombos = outerJoin(processes, variables, methods) as [
    Process | null,
    Variable | null,
    Method | null
  ][];

  // 2. Filter by your matching rules.
  const validCombos = allCombos.filter(isValidCombination);

  // 3. Remove dominated combinations: for example, if [p, v, m] exists, drop [p, v, null].
  const finalCombos = removeDominated(validCombos);

  return finalCombos;
};

function generateTableRows(
  data: [Process | null, Variable | null, Method | null][]
): any {
  // For each row, build a flat array of strings based on each entity's keys.
  const displayRows: string[][] = data.map((row) =>
    row
      .map((entityItem, entityIndex) => {
        const keys = getKeysFromObjects(entities[entityIndex].data);
        // For each key, if the item exists, return its value (as a string); otherwise, return an empty string.
        return keys.map((key) =>
          entityItem ? String((entityItem as any)[key]) : ""
        );
      })
      .flat()
  );

  // Build a flat array of entity indices for each column.
  const flatEntityIndices: number[] = entities.flatMap((entity, index) =>
    getKeysFromObjects(entity.data).map(() => index)
  );

  const numRows = displayRows.length;
  const numCols = displayRows[0]?.length || 0;
  const rows: any[] = [];

  // Loop over each row.
  for (let i = 0; i < numRows; i++) {
    const cells: any[] = [];
    for (let j = 0; j < numCols; j++) {
      // Skip rendering if the same cell appears in the previous row.
      if (i > 0 && displayRows[i][j] === displayRows[i - 1][j]) continue;

      // Count how many consecutive rows have the same value in this column.
      let rowSpan = 1;
      for (let k = i + 1; k < numRows; k++) {
        if (displayRows[k][j] === displayRows[i][j]) {
          rowSpan++;
        } else {
          break;
        }
      }

      // Use the corresponding entity index to set the cell colour.
      cells.push(
        <TableCell
          key={`cell-${i}-${j}`}
          rowSpan={rowSpan > 1 ? rowSpan : undefined}
          className={`max-w-[100px] whitespace-normal break-words ${cellColour(
            flatEntityIndices[j]
          )}`}
        >
          {displayRows[i][j]}
        </TableCell>
      );
    }
    rows.push(<TableRow key={`row-${i}`}>{cells}</TableRow>);
  }
  return rows;
}

export default function Home() {
  const finalData = allData();
  const tableRows = generateTableRows(finalData as any);

  return (
    <main className="flex max-h-screen flex-col items-center justify-center">
      <div className="overflow-x-auto w-full">
        <Table>
          <TableHeader>
            <TableRow>
              {entities.map((entity, index) => {
                const colSpan = getKeysFromObjects(entity.data).length;
                return (
                  <TableHead
                    key={entity.name}
                    colSpan={colSpan}
                    className={`text-center text-lg font-bold ${headColour(
                      index
                    )}`}
                  >
                    {entity.name}
                  </TableHead>
                );
              })}
            </TableRow>
            <TableRow>
              {entities.flatMap((entity, index) =>
                getKeysFromObjects(entity.data).map((columnName) => (
                  <TableHead
                    key={`e${index}-${columnName}`}
                    className={`max-w-[100px] whitespace-normal break-words ${headColour(
                      index
                    )}`}
                  >
                    {columnName}
                  </TableHead>
                ))
              )}
            </TableRow>
          </TableHeader>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </div>
    </main>
  );
}
