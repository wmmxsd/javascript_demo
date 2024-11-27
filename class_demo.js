/**
 * javascript不区分实例和对象，而是通过原型（prototype）来实现面向对象编程。
 *
 * */
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.hello = () => console.log("Hello," + this.name + "!");
}

Student.prototype.hi = function () {
  console.log("Hello," + this.name + "!");
};

function createStudent(name, grade) {
  return new Student(name, grade);
}

let xiaoming = new Student("小明");
console.log("🚀 ~ xiaoming.name:", xiaoming.name);
console.log("🚀 ~ xiaoming.hello():", xiaoming.hello());

console.log(
  "🚀 ~ xiaoming.constructor == Student.prototype.constructor:",
  xiaoming.constructor == Student.prototype.constructor
);
console.log(
  "🚀 ~ Student.prototype.constructor === Student:",
  Student.prototype.constructor === Student
);
console.log(
  "🚀 ~ xiaoming.constructor == Student:",
  xiaoming.constructor == Student
);
console.log(
  "🚀 ~ Object.getPrototypeOf(xiaoming) === Student.prototype:",
  Object.getPrototypeOf(xiaoming) === Student.prototype
);
console.log("🚀 ~ xiaoming instanceof Student:", xiaoming instanceof Student);

let xiaohong = new Student("小红");
console.log(
  "🚀 ~ xiaoming.hello == xiaohong.hello:",
  xiaoming.hello == xiaohong.hello
);

console.log("🚀 ~ xiaoming.hi == xiaohong.hi:", xiaoming.hi == xiaohong.hi);

let xiaofei = createStudent("小飞");
xiaofei.hi();
let xiaorui = createStudent();
xiaorui.hi();

function PrimaryStudent(name, grade) {
  Student.apply(this, [name, grade]);
}

let pri = new PrimaryStudent();
console.log(
  "🚀 ~ pri.__proto__ == PrimaryStudent.prototype:",
  pri.__proto__ == PrimaryStudent.prototype
);
console.log(
  "🚀 ~ pri.__proto__.__proto__ == Student.prototype:",
  pri.__proto__.__proto__ == Student.prototype
);
console.log(
  "🚀 ~ pri.__proto__.__proto__ == Object.prototype:",
  pri.__proto__.__proto__ == Object.prototype
);

function inherits(Child, Parent) {
  let F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

inherits(PrimaryStudent, Student);

PrimaryStudent.prototype.getGrade = function () {
  return this.grade;
};

let pri_1 = new PrimaryStudent("1", 100);
console.log(pri_1.name, pri_1.getGrade());
console.log(
  "🚀 ~ pri_1.__proto__ == PrimaryStudent.prototype:",
  pri_1.__proto__ == PrimaryStudent.prototype
);
console.log(
  "🚀 ~ pri_1.__proto__.__proto__ == Student.prototype:",
  pri_1.__proto__.__proto__ == Student.prototype
);
console.log(
  "🚀 ~ pri_1.__proto__.__proto__ == Object.prototype:",
  pri_1.__proto__.__proto__.__proto__ == Object.prototype
);

class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log("Hello," + this.name + "!!");
  }
}

class PrimarySchoolStudent extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  point() {
    if (!this.grade || this.grade <= 60) {
      return "C";
    } else if (this.grade < 90) {
      return "B";
    } else {
      return "A";
    }
  }
}

let s1 = new Person("s1");
s1.hello();

let ps1 = new PrimarySchoolStudent("ps1", 90);
ps1.point();
console.log("🚀 ~ ps1.point():", ps1.point());
