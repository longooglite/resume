/**
 * resumeDateToDate
 * - Converts a resume date string to a Date object
 * - Handles "Present" as current date
 * - Expects YYYY-MM or YYYY
 * - Returns Date object or current date if "Present"
 * @param resumeDate - The resume date string to convert
 * @returns The Date object
 */
export const resumeDateToDate = (resumeDate: string): Date => {
  if (resumeDate.toLowerCase() === 'present') return new Date()
  const [year, month] = resumeDate.split('-')
  return new Date(parseInt(year), parseInt(month) - 1, 1)
}
