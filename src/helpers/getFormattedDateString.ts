import { MONTHS } from '~constants/common'

const getFormattedDateString = (date: string) => {
  const parsedDate = new Date(date)
  return `${parsedDate.getDate()} ${MONTHS[parsedDate.getMonth()]}`
}

export default getFormattedDateString
