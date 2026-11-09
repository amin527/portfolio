/** Zero-based position to a two-digit label: 0 → "01". */
export function formatIndex(position: number) {
  return String(position + 1).padStart(2, "0");
}

/** "1 project", "2 projects". */
export function pluralise(count: number, noun: string) {
  return `${count} ${count === 1 ? noun : `${noun}s`}`;
}
