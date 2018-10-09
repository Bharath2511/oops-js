//constructor without classes
function User(email,name) {
   this.email = email
   this.name = name
   this.online = false
}

User.prototype.login = function() {
    this.online =true
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function(){
    this.online = false
    console.log(this.email, 'has logged out')
}

function Admin(...args) {
  User.apply(this,args)
}

var userOne = new User('doe.edu','Joe')
var userTwo = new User('snow.edu','John')
var admin = new Admin('santosh.edu','Santosh')

console.log(admin)