export const monthsToYearsAndMonths = (months: number): string => {
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  if (years > 0 && remainingMonths > 0) {
    return years + ' years and ' + remainingMonths + ' months'
  } else if (years > 0) {
    return years + ' years'
  } else {
    return remainingMonths + ' months'
  }
}
