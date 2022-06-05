var mouse = require('./mouse');
function cat() { 
    this.stomach =[];
 }
 cat.prototype.eat = function(animal){
     if (animal instanceof mouse ){
        this.stomach.push(animal);
     }
     else {
         throw new Error ('cat can only eat mouse !')
     }
     
 }
 module.exports = cat