import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// twMerge is enough, clsx is just for the object syntax support
// https://github.com/dcastil/tailwind-merge/discussions/137#discussioncomment-3481605

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
