class Student{
  constructor(name, age, marks){
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minAge){
    return (minMarks) => {
      if(this.age > minAge && this.marks > minMarks){
        console.log(this.name + " is Eligible")
      }else{
        console.log(this.name + " not Eligible.")
      }
    }
  }
}
const sri = new Student('sri', 25, 70); 
const harsha = new Student('harsha', 15, 35);
sri.setPlacementAge(18)(40); 
harsha.setPlacementAge(18)(40); 