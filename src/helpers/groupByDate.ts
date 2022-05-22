import getFormattedDateString from '~helpers/getFormattedDateString'
import { SubjectTimetable } from '~types/timetable'

const groupByDate = (array: SubjectTimetable[]) => {
  const dates = new Set(array.map(item => getFormattedDateString(item.timeStart)))
  const groupedArray: { title: string; data: SubjectTimetable[] }[] = []

  dates.forEach(date => {
    groupedArray.push({
      title: date,
      data: array.filter(item => getFormattedDateString(item.timeStart) === date),
    })
  })

  return groupedArray
}

export default groupByDate
