function mouse (name){
    this.name = name;
    this.isdead = false
}
mouse.prototype.die = function(){
    this.isdead = true ;
}
module.exports = mouse ;