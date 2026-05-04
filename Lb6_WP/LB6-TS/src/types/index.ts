export interface Article {
  id: number
  title: string
  topic: string
  date: string
  author: string

  // додаткове поле (вимога)
  content: string
  image: string
}