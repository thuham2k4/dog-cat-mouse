var chalk = require('chalk');   //require() là hàm trả về tham chiếu tới một Module cụ thể.


function dog (name){
    this.stomach =[];
    this.name = name;
    
}
dog.prototype.eat =function(cat){
    this.stomach.push(cat);
}
dog.prototype.sayHi = function(){
 console.log ('hihihihih .myname is '+ chalk.red(this.name))};
module.exports = dog ; //Module là các đoạn code được đóng gói lại với nhau,...
                       // Code trong một Module thường là private – nghĩa là các hàm, biến được định nghĩa và truy cập bởi bên trong của Module. 
                       //Để "chìa ra" các hàm hoặc biến để sử dụng bên ngoài Module bạn cần sử dụng exports.