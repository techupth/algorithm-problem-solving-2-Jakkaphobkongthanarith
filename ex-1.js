function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i in students) {
    if (students[i] === searchStudent) {
      console.log("meow");
      return i;
    }
  }
  return -1;
}

students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
console.log("ans is:", findStudentIndex(students, "Diana"));
// ตอบคำถามตรงนี้จ้า
//      O(N) เนื่องจากลูปเช็คทุกๆตัวไปเรื่อยๆ ถ้าเจอก็จบตรงนั้น ไม่เจอก็รีเทิร์น-1
