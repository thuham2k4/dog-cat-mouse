function mouse (name){
    this.name = name;
    this.dead = false
}
mouse.prototype.die = function(){
    this.dead = true ;
}
module.exports = mouse ;