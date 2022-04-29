
// 原型链继承
// function Person () {
//   this.name = "John";
// }

// Person.prototype.getName = function () {
//   console.log(this.name)
// };

// function Children () {
//   this.name = "Alice"
// }

// Children.prototype = new Person();

// const child = new Children();

// child.getName()

// // 缺点：引用类型的属性被所有实例共享

// function Person () {
//   this.names = ['John', 'Alice']
// }

// function Child () { }

// Child.prototype = new Person()
// const child1 = new Child()
// child1.names.push('ws')

// const child2 = new Child()
// console.log(child2.names)

// 借用构造函数继承
// function Person () {
//   this.names = ['John', 'John Smith']
// }


// function Child () {
//   Person.call(this)
// }

// const child = new Child()

// child.names.push('ws')

// console.log(child.names)

// const child2 = new Child()

// child2.names.push('wss')

// console.log(child2.names);



// 组合继承
function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'orange', 'yellow'];
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent()

Child.prototype.construtor = Child

const child1 = new Child('ws', 19)

