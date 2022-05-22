export interface Performance {
  semester: number
  cycle: string
  subject: string
  lecturesCount: number
  practiceCount: number
  laboratoryWorksCount: number
  ssrCount: number
  creditCount: number
  exam?: number
  credit?: boolean
  differentialCredit?: number
  termPaperWork?: number
  termPaperProject?: number
}

export enum GradeTypes {
  Positive = 'positive',
  Negative = 'negative',
  Null = 'null',
}

export enum ExamTypes {
  Exam = 'Экзамен',
  Credit = 'Зачет',
  DiffCredit = 'Дифференцированный зачет',
  Null = 'null',
}
