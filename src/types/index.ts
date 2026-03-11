/**
 * Shared TypeScript types used across the project.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type CoffeeItem = {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
};

export type HoursEntry = {
  readonly day: string;
  readonly time: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
