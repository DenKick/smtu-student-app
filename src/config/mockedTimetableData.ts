export interface SubjectTimetable {
  timeStart: Date
  timeEnd: Date
  subject: string
  type: string
  teacher: string | null
  classroom: string
}

export const mockedTimetableData: SubjectTimetable[] = [
  {
    timeStart: new Date(2022, 4, 9, 11, 50),
    timeEnd: new Date(2022, 4, 9, 13, 20),
    subject: 'Международный маркетинг',
    type: 'Лекция',
    teacher: 'Плис Кристина Сергеевна',
    classroom: 'М 11',
  },
  {
    timeStart: new Date(2022, 4, 9, 14, 0),
    timeEnd: new Date(2022, 4, 9, 15, 30),
    subject: 'Международный маркетинг',
    type: 'Практическое занятие',
    teacher: 'Плис Кристина Сергеевна',
    classroom: 'М 11',
  },
  {
    timeStart: new Date(2022, 4, 9, 15, 40),
    timeEnd: new Date(2022, 4, 9, 17, 10),
    subject: 'Технико-экономический анализ',
    type: 'Лекция',
    teacher: 'Палкина Елена Сергеевна',
    classroom: 'М 11',
  },
  {
    timeStart: new Date(2022, 4, 9, 17, 20),
    timeEnd: new Date(2022, 4, 9, 18, 50),
    subject: 'Технико-экономический анализ',
    type: 'Практическое занятие',
    teacher: 'Палкина Елена Сергеевна',
    classroom: 'М 11',
  },
  {
    timeStart: new Date(2022, 4, 10, 8, 30),
    timeEnd: new Date(2022, 4, 10, 10, 0),
    subject: 'Военная подготовка (офицеры запаса)',
    type: 'Практическое занятие',
    teacher: null,
    classroom: 'А ВУЦ',
  },
  {
    timeStart: new Date(2022, 4, 10, 8, 30),
    timeEnd: new Date(2022, 4, 10, 10, 0),
    subject: 'Военная подготовка (матросы/солдаты запаса)',
    type: 'Практическое занятие',
    teacher: null,
    classroom: 'А ВУЦ',
  },
  {
    timeStart: new Date(2022, 4, 11, 14, 0),
    timeEnd: new Date(2022, 4, 11, 15, 30),
    subject: 'Международные стандарты качества',
    type: 'Практическое занятие',
    teacher: 'Балашова Елена Сергеевна',
    classroom: 'У 515А',
  },
  {
    timeStart: new Date(2022, 4, 11, 15, 40),
    timeEnd: new Date(2022, 4, 11, 17, 10),
    subject: 'Профессионально ориентированный перевод',
    type: 'Практическое занятие',
    teacher: null,
    classroom: 'У каф.ИЯ',
  },
  {
    timeStart: new Date(2022, 4, 12, 10, 10),
    timeEnd: new Date(2022, 4, 12, 11, 40),
    subject: 'Экономика недвижимости и оценка стоимости бизнеса',
    type: 'Практическое занятие',
    teacher: 'Кох Лариса Вячеславовна',
    classroom: 'Б 500',
  },
  {
    timeStart: new Date(2022, 4, 12, 11, 50),
    timeEnd: new Date(2022, 4, 12, 13, 20),
    subject: 'Управление персоналом в международном бизнесе',
    type: 'Лекция',
    teacher: 'Стрельникова Лариса Анатольевна',
    classroom: 'Б 101',
  },
  {
    timeStart: new Date(2022, 4, 12, 14, 0),
    timeEnd: new Date(2022, 4, 12, 15, 30),
    subject: 'Экономика недвижимости и оценка стоимости бизнеса',
    type: 'Лекция',
    teacher: 'Кох Лариса Вячеславовна',
    classroom: 'Б 505(1)',
  },
  {
    timeStart: new Date(2022, 4, 12, 15, 40),
    timeEnd: new Date(2022, 4, 12, 17, 10),
    subject: 'Управление персоналом в международном бизнесе',
    type: 'Практическое занятие',
    teacher: 'Стрельникова Лариса Анатольевна',
    classroom: 'Б 505(1)',
  },
]
