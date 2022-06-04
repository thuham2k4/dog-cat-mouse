var dog = require ('./dog');
var cat = require('./cat');
var otherdog = new dog('Tom đẹp trai');
otherdog.sayHi();
var tom = new cat();
otherdog.eat(tom);
console.log(otherdog);