import { SubjectTimetable } from '~config/mockedTimetableData'
import getFormattedDateString from '~helpers/getFormattedDateString'

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
