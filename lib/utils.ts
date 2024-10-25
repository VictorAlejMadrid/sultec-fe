import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getArrayWithKeys(arrayLenght: number) {
  const array = new Array<number>(arrayLenght);

  for (let i = 1; i <= arrayLenght; i++) {
    array[i] = i;
  }

  if (arrayLenght <= 0) {
    return [1];
  }

  return array;
}
