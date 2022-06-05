var dog = require ('./dog');
var cat = require('./cat');
var mouse = require('./mouse');

var otherdog = new dog('Tom đẹp trai');
otherdog.sayHi();
var tom = new cat();
otherdog.eat(tom);
console.log(otherdog);
var cat = new cat();
var mouse = new mouse('minh hieu thúi');
cat.eat(mouse);
console.log(cat);
cat.eat(otherdog);