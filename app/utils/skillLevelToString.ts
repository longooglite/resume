export const skillLevelToString = (level: number) => {
  if (level > 7) return 'Expert'
  if (level > 5) return 'Advanced'
  if (level > 3) return 'Proficient'
  if (level > 1) return 'Intermediate'
  return 'Beginner'
}
