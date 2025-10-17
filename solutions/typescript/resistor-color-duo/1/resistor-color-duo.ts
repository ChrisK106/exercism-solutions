
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
] as const;

export type Color = typeof COLORS[number];

export function decodedValue(colors: Color[]): number {
  // Take the first two colors, find their index values, and combine them
  const first = COLORS.indexOf(colors[0]);
  const second = COLORS.indexOf(colors[1]);

  // Combine as a two-digit number (e.g., 1 and 5 -> 15)
  return first * 10 + second;
}