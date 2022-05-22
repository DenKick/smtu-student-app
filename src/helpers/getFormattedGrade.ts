import { ExamTypes, GradeTypes, Performance } from '~types/performance'

const getFormattedGrade = (item: Performance) => {
  if (item.exam) {
    return {
      type: item.exam > 2 ? GradeTypes.Positive : GradeTypes.Negative,
      exam: ExamTypes.Exam,
      grade: item.exam.toString(),
    }
  }

  if (item.differentialCredit) {
    return {
      type: item.differentialCredit > 2 ? GradeTypes.Positive : GradeTypes.Negative,
      exam: ExamTypes.DiffCredit,
      grade: item.differentialCredit.toString(),
    }
  }

  if (item.credit === false) {
    return {
      type: GradeTypes.Negative,
      exam: ExamTypes.Credit,
      grade: 'Незачет',
    }
  }

  if (item.credit === true) {
    return {
      type: GradeTypes.Positive,
      exam: ExamTypes.Credit,
      grade: 'Зачет',
    }
  }

  return {
    type: GradeTypes.Null,
    exam: GradeTypes.Null,
    grade: '',
  }
}

export default getFormattedGrade
