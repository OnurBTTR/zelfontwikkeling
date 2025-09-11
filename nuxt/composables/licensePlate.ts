/**
 * Format a string into the official Dutch license plate notation.
 *
 * Removes invalid characters, uppercases the input, and applies the correct hyphenation
 */

const combinations: { combination: RegExp; format: string }[] = [
  {combination: /^([A-Z]{2})(\d{2})(\d{2})$/, format: '$1-$2-$3'},
  {combination: /^(\d{2})(\d{2})([A-Z]{2})$/, format: '$1-$2-$3'},
  {combination: /^(\d{2})([A-Z]{2})(\d{2})$/, format: '$1-$2-$3'},
  {combination: /^([A-Z]{2})(\d{2})([A-Z]{2})$/, format: '$1-$2-$3'},
  {combination: /^([A-Z]{2})([A-Z]{2})(\d{2})$/, format: '$1-$2-$3'},
  {combination: /^(\d{2})([A-Z]{2})([A-Z]{2})$/, format: '$1-$2-$3'},
  {combination: /^([A-Z]{2})([A-Z]{3})(\d)$/, format: '$1-$2-$3'},
  {combination: /^(\d)([A-Z]{3})(\d{2})$/, format: '$1-$2-$3'},
  {combination: /^([A-Z]{2})(\d{3})([A-Z])$/, format: '$1-$2-$3'},
  {combination: /^([A-Z])(\d{3})([A-Z]{2})$/, format: '$1-$2-$3'},
  {combination: /^([A-Z]{3})(\d{2})([A-Z])$/, format: '$1-$2-$3'},
  {combination: /^([A-Z])(\d{2})([A-Z]{3})$/, format: '$1-$2-$3'},
  {combination: /^(\d)([A-Z]{2})(\d{3})$/, format: '$1-$2-$3'},
  {combination: /^(\d{3})([A-Z]{2})(\d)$/, format: '$1-$2-$3'},
];

export function useFormatLicensePlate(value: string) {
  const input = value.toUpperCase();

  const clean = input.replace(/[^A-Z0-9]/g, '');

  for (const {combination, format} of combinations) {
    if (combination.test(clean)) {
      return clean.replace(combination, format);
    }
  }

  return input;
}
