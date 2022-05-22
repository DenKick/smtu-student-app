import { Homework } from '~types/homework'

const groupByDate = (array: Homework[]) => {
  const dates = new Set(array.map(item => item.subject))
  const groupedArray: { title: string; data: Homework[] }[] = []

  dates.forEach(subject => {
    groupedArray.push({
      title: subject,
      data: array.filter(item => item.subject === subject),
    })
  })

  return groupedArray
}

export default groupByDate
