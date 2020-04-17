export function getDateTimeToString(milliseconds) {
  const datetime = new Date(milliseconds)

  return datetime.toString()
}
