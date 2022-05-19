export interface News {
  heading: string
  date: string
  text: string
  author: string
}

interface AdditionalField {
  fieldName: string
  fieldValue: string
}

export interface Notification {
  id: number
  heading: string
  type: string
  annotation?: string
  description: string
  additionalFields?: AdditionalField[]
}
