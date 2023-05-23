import { NewDiaryEntry, Weather, Visibility } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): boolean => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherFromRequest
}

const isWeather = (string: string): boolean => {
  return Object.values(Weather).includes(string)
}

const isString = (comment: string): boolean => {
  return typeof comment === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    title: object.title,
    type: object.type
  }

  return newEntry
}

export default toNewDiaryEntry
