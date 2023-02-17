type Student = {
  name : string
  weights : CourseGrades
  currentAverage : number
}
type CourseGrades = {
  assignmentWeights : CourseGrade
  finalExamWeight : number
}
type CourseGrade = {
  name : string
  weight : number
  grade : number
}
