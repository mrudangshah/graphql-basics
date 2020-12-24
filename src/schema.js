import { buildSchema } from "graphql"

// take care of back-tick by creating schema
const schema = buildSchema(`
  type Course {
    id: ID
    courseName: String
    category: String
    price: Int
    language: String
    email: String
    platform: Platform
    teachingAssists: [TeachingAssists]
  }

  type TeachingAssists {
    firstName: String
    lastName: String
    experience: Int
  }

  enum Platform {
    WEB
    MOBILE
    OTHER
  }


  type Query {
    getCourse(id:ID): Course
  }

  input CourseInput{
    id: ID
    courseName: String!
    category: String
    price: Int!
    language: String
    email: String
    platform: Platform
    teachingAssists: [TeachingAssists]!
  }

  input TeachingAssistsInput{
    firstName: String
    lastName: String
    experience: Int
  }

  type Mutation{
    createCourse(input: CourseInput): Course
  }

`)


export default schema