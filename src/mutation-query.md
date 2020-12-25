mutation{
  createCourse(input: {
    courseName: "GraphQL"
    price: 1499
    platform:WEB
    teachingAssists: [{
      firstName: "Mrudang"
      lastName: "Shah"
      experience: 1
    }, {
      firstName: "Nasiruddin"
      lastName: "Saiyad"
      experience: 4
    }]
  }){
    id,
    courseName
  }
}