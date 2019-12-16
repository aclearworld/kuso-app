export const randomChoiceFromArray = <T>(arr: T[]): T | null => {
  if (arr.length === 0) return null

  return arr[Math.floor(arr.length * Math.random())]
}
