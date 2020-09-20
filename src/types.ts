// global imports
import { Document } from 'mongoose'
// local imports

// entities
// events ----------------------------------------------------------------------
export interface IEvent extends Document {
  _id: string
  title: string
  description: string
  price: number
  date: string
  creator: IUser
}
export interface IUser extends Document {
  _id: string
  email: string
  password: string | null
  createdEvents: IEvent[]
}
export interface IBooking extends Document {
  id: string
  event: string
  user: string
  createdAt: string
  updatedAt: string
}
export interface IEventID {
  eventId: string
}
export interface IBookingID {
  bookingId: string
}
export interface ILogin {
  email: string
  password: string
}
export interface IAuthData {
  userId: string
  token: string
  tokenExpiration: number
}
// employees -------------------------------------------------------------------
export interface IDepartment {
  name: string
}
export interface ITitle {
  name: string
}
export interface IGender {
  name: string
}
export interface IEmployee {
  birth_date: string
  first_name: string
  last_name: string
  gender: IGender
}
export interface IEmployment {
  employee: IEmployee
  department: IDepartment
  start_date: string
  end_date: string
}
export interface IEmployeeTitle {
  employee: IEmployee
  title: ITitle
  start_date: string
  end_date: string
}
export interface IPaycheck {
  employee: IEmployee
  salary: number
  start_date: string
  end_date: string
}

// inputs
// events ----------------------------------------------------------------------
export interface IEventInput {
  eventInput: {
    title: string
    description: string
    price: number
    date: string
  }
}
export interface IUserInput {
  userInput: {
    email: string
    password: string
  }
}
// employees -------------------------------------------------------------------
export interface IDepartmentInput {
  input: IDepartment
}
export interface ITitleInput {
  input: ITitle
}
export interface IGenderInput {
  input: IGender
}
export interface IEmployeeInput {
  input: IEmployee
}
export interface IEmploymentInput {
  input: IEmployment
}
export interface IEmployeeTitleInput {
  input: IEmployeeTitle
}
export interface IPaycheckInput {
  input: IPaycheck
}
