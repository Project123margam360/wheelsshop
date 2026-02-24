import { type ClassValue, clsx } from "clsx";

/**
 * Merge Tailwind classes without conflicts.
 * Uses clsx for conditional joining (install clsx: npm i clsx).
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
