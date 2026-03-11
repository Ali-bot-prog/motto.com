/**
 * Shared utility functions
 */

/**
 * Combines class names, filtering out falsy values.
 * Lightweight alternative to clsx for simple use cases.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a phone number for display.
 */
export function formatPhone(phone: string): string {
  return phone;
}

/**
 * Check if we're running in a browser environment.
 */
export const isBrowser = typeof window !== "undefined";
