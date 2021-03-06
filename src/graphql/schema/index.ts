// deps
import { buildSchema, GraphQLSchema } from 'graphql'
// helpers
import {
  type as departmentType,
  input as departmentInput,
  mutation as departmentMutation,
  query as departmentQuery,
} from './department'
import {
  type as authType,
  input as authInput,
  mutation as authMutation,
  query as authQuery,
} from './auth'
import {
  type as genderType,
  input as genderInput,
  mutation as genderMutation,
  query as genderQuery,
} from './gender'
import {
  type as titleType,
  input as titleInput,
  mutation as titleMutation,
  query as titleQuery,
} from './title'
import {
  type as employmentType,
  input as employmentInput,
  mutation as employmentMutation,
  query as employmentQuery,
} from './employment'
import {
  type as employeeType,
  input as employeeInput,
  mutation as employeeMutation,
  query as employeeQuery,
} from './employee'
import {
  type as employeeTitleType,
  input as employeeTitleInput,
  mutation as employeeTitleMutation,
  query as employeeTitleQuery,
} from './employeeTitle'
import {
  type as paycheckType,
  input as paycheckInput,
  mutation as paycheckMutation,
  query as paycheckQuery,
} from './paycheck'

export const schema: GraphQLSchema = buildSchema(`
  ${departmentType}
  ${departmentInput}
  ${authType}
  ${authInput}
  ${genderType}
  ${genderInput}
  ${titleType}
  ${titleInput}
  ${employmentType}
  ${employmentInput}
  ${employeeType}
  ${employeeInput}
  ${employeeTitleType}
  ${employeeTitleInput}
  ${paycheckType}
  ${paycheckInput}
  type RootQuery {
    ${departmentQuery}
    ${authQuery}
    ${genderQuery}
    ${titleQuery}
    ${employmentQuery}
    ${employeeQuery}
    ${employeeTitleQuery}
    ${paycheckQuery}
  }
  type RootMutation {
    ${departmentMutation}
    ${authMutation}
    ${genderMutation}
    ${titleMutation}
    ${employmentMutation}
    ${employeeMutation}
    ${employeeTitleMutation}
    ${paycheckMutation}
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)
