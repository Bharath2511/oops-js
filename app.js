//constructor without classes
function User(email,name) {
   this.email = email
   this.name = name
   this.online = false
}

User.prototype.login = () => {
    this.online =true
    console.log(this.email, 'has logged in')
}
var userOne = new User('doe.edu','Joe')
var userTwo = new User('snow.edu','John')

console.log(userOne)
userTwo.login()
