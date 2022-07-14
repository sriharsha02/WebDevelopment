'use strict';
class Student{
  static  count = 0;
  constructor(name, age, phoneNumber, marks){
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.marks = marks;
    Student.count++;
  }
  setPlacementAge(minPlacementAge){
    return (minMarks) =>{
      if(this.age > minPlacementAge && this.marks > minMarks){
        console.log(this.name + ' is eligible for placements');
      }
      else{
        console.log(this.name + ' is not eligible for placements');
      }
    }
  }
}
const s1 = new Student('sri', 20, 99438943, 50);
const s2 = new Student('harsha', 22, 99890743, 60);
const s3 = new Student('akshintala', 19, 993464565, 40);
const s4 = new Student('charan', 19, 99546575, 80);
const s5 = new Student('pithani', 18, 46783499, 90);

s1.setPlacementAge(18)(40);
s2.setPlacementAge(18)(40);
s3.setPlacementAge(18)(40);
s4.setPlacementAge(18)(40);
s5.setPlacementAge(18)(40);