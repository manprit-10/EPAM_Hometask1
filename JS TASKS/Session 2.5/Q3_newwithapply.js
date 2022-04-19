function Greeting(name) {
    this.name = name;
  }
  Greeting.prototype.sayHello = function() {
    return "Hello " + this.name;
  };
  Greeting.prototype.sayBye = function() {
    return "Bye " + this.name;
  };
  var greeting = new Greeting('John');