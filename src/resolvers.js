import { nanoid } from "nanoid"

class Course {
  constructor(id, {
    courseName, category, price, language, email, platform, teachingAssists
  }) {
    this.id = id
    this.courseName = courseName
    this.category = category
    this.price = price
    this.language = language
    this.email = email
    this.platform = platform
    this.teachingAssists = teachingAssists
  }

}


const courseDB = {}


const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, courseDB[id])
  },
  createCourse: ({ input }) => {
    let id = nanoid()
    courseDB[id] = input
    return new Course(id, input)
  }
}

export default resolvers;