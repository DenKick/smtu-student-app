import { GradeTypes, Performance } from '~types/performance'

const getFormattedGrade = (item: Performance) => {
  if (item.exam) {
    return {
      type: item.exam > 2 ? GradeTypes.Positive : GradeTypes.Negative,
      grade: item.exam.toString(),
    }
  }

  if (item.differentialCredit) {
    return {
      type: item.differentialCredit > 2 ? GradeTypes.Positive : GradeTypes.Negative,
      grade: item.differentialCredit.toString(),
    }
  }

  if (item.credit === false) {
    return {
      type: GradeTypes.Negative,
      grade: 'Незачет',
    }
  }

  if (item.credit === true) {
    return {
      type: GradeTypes.Positive,
      grade: 'Зачет',
    }
  }

  return {
    type: GradeTypes.Null,
    grade: '',
  }
}

export default getFormattedGrade
