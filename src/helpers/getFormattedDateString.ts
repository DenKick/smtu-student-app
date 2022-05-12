import { MONTHS } from '~constants/common'

const getFormattedDateString = (date: Date) => {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`
}

export default getFormattedDateString
