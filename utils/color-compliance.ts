/**
 * @description Normalizes an RGB channel value to its relative luminance.
 * @param channelValue - The value of the color channel (0-255).
 * @returns The normalized luminance value for the channel.
 */
const normalizeLuminance = (channelValue: number): number => {
  const scaledValue = channelValue / 255
  return scaledValue <= 0.03928 ? scaledValue / 12.92 : Math.pow((scaledValue + 0.055) / 1.055, 2.4)
}

/**
 * @description Converts a HEX color code to its RGB components.
 * @param hexColorCode - The HEX color code (e.g., "#ffffff").
 * @returns A tuple representing the RGB components as numbers.
 *          Example: [255, 255, 255] for "#ffffff".
 */
const parseHexToRgb = (hexColorCode: string): [number, number, number] => {
  const hexValue = parseInt(hexColorCode.slice(1), 16) // Convert HEX to integer
  const redChannel = (hexValue >> 16) & 0xff
  const greenChannel = (hexValue >> 8) & 0xff
  const blueChannel = hexValue & 0xff
  return [redChannel, greenChannel, blueChannel]
}

/**
 * @description Calculates the relative luminance of a HEX color.
 * Follows the WCAG formula for luminance calculation.
 * @param hexColorCode - The HEX color code (e.g., "#ffffff").
 * @returns The relative luminance value (0 to 1).
 */
const computeLuminance = (hexColorCode: string): number => {
  const [redChannel, greenChannel, blueChannel] = parseHexToRgb(hexColorCode)
  const redLuminance = normalizeLuminance(redChannel)
  const greenLuminance = normalizeLuminance(greenChannel)
  const blueLuminance = normalizeLuminance(blueChannel)
  return 0.2126 * redLuminance + 0.7152 * greenLuminance + 0.0722 * blueLuminance
}

/**
 * @description Calculates the contrast ratio between two HEX colors.
 * Follows the WCAG formula for contrast ratio calculation.
 * @param foregroundColor - The HEX color code for the foreground (e.g., "#ffffff").
 * @param backgroundColor - The HEX color code for the background (e.g., "#000000").
 * @returns The contrast ratio (1 to 21).
 */
const computeContrastRatio = (foregroundColor: string, backgroundColor: string): number => {
  const foregroundLuminance = computeLuminance(foregroundColor)
  const backgroundLuminance = computeLuminance(backgroundColor)
  const brighterLuminance = Math.max(foregroundLuminance, backgroundLuminance)
  const darkerLuminance = Math.min(foregroundLuminance, backgroundLuminance)
  return (brighterLuminance + 0.05) / (darkerLuminance + 0.05)
}

/**
 * @description Determines the WCAG compliance levels (AA, AAA) between two HEX colors.
 * @param foregroundColor - The HEX color code for the foreground (e.g., "#ffffff").
 * @param backgroundColor - The HEX color code for the background (e.g., "#000000").
 * @returns An object containing:
 *   - contrastRatio: The contrast ratio as a string rounded to 1 decimal place.
 *   - isAAACompliant: Whether the contrast meets the AAA compliance level.
 *   - isAACompliant: Whether the contrast meets the AA compliance level.
 *   - isLargeTextAACompliant: Whether the contrast meets the AA compliance level for large text.
 */
const evaluateCompliance = (
  foregroundColor: string,
  backgroundColor: string
): {
  contrastRatio: string
  isAAACompliant: boolean
  isAACompliant: boolean
  isLargeTextAACompliant: boolean
} => {
  const contrastRatio = computeContrastRatio(foregroundColor, backgroundColor)

  return {
    contrastRatio: contrastRatio.toFixed(1), // Rounded to 1 decimal place
    isAAACompliant: contrastRatio >= 7,
    isAACompliant: contrastRatio >= 4.5,
    isLargeTextAACompliant: contrastRatio >= 3
  }
}

export { normalizeLuminance, parseHexToRgb, computeLuminance, computeContrastRatio, evaluateCompliance }