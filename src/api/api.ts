import axios from 'axios'

import { SubjectTimetable } from '~types/timetable'

const apiInstance = axios.create({
  baseURL: 'https://run.mocky.io/',
})

class Api {
  public async login() {
    const { data } = await apiInstance.get<{ token: string }>('v3/e07dfb1f-a9a8-4bef-85bc-59ed380dc490', {
      params: {
        'mocky-delay': '3000ms',
      },
    })
    return data
  }

  public async getTimetable() {
    const { data } = await apiInstance.get<SubjectTimetable[]>('/v3/44150304-25bf-4bf6-87bd-23fbb2ebb309', {
      params: {
        'mocky-delay': '1000ms',
      },
    })
    return data
  }
}

Object.freeze(Api)
const api = new Api()

export default api
