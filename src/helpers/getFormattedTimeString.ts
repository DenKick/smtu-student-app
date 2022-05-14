const getFormattedTimeString = (date: string) => {
  const parsedDate = new Date(date)
  const hours = parsedDate.getHours()
  const minutes = parsedDate.getMinutes()
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

export default getFormattedTimeString
