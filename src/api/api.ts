import axios from 'axios'

import { Message } from '~types/messages'
import { News, Notification } from '~types/newsAndNotifications'
import { Performance } from '~types/performance'
import { Profile } from '~types/profile'
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

  public async getUserInfo() {
    const { data } = await apiInstance.get<Profile>('/v3/c43ef866-417a-4ea3-9dcd-e03b3678c444', {
      params: {
        'mocky-delay': '500ms',
      },
    })
    return data
  }

  public async getNews() {
    const { data } = await apiInstance.get<News[]>('/v3/0f309ea6-8871-4924-89fe-9dcbfdd6e50a', {
      params: {
        'mocky-delay': '1500ms',
      },
    })
    return data
  }

  public async getNotifications() {
    const { data } = await apiInstance.get<Notification[]>('/v3/667ce271-0dfb-48a1-95f5-c33727fa4a64', {
      params: {
        'mocky-delay': '500ms',
      },
    })
    return data
  }

  public async getPerformance() {
    const { data } = await apiInstance.get<Performance[]>('/v3/ee8e9927-a3f5-42d4-87df-502f46f1da36', {
      params: {
        'mocky-delay': '1000ms',
      },
    })
    return data
  }

  public async getMessages() {
    const { data } = await apiInstance.get<Message[]>('/v3/ed6eeb82-69bc-40af-a500-ac54af666b75', {
      params: {
        'mocky-delay': '1500ms',
      },
    })
    return data
  }
}

Object.freeze(Api)
const api = new Api()

export default api
