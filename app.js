class User {
    //constructor is a function that creates our object
    constructor(email,name) {
         this.email = email
         this.name = name
         this.score = 0
    }
    login() {
        console.log(this.email, 'just logged in')
        return this
    }
    logout() {
        console.log(this.email, 'just logged out')
        return this
    }
    updateScore() {
        this.score++
        console.log(this.email, 'score is now', this.score )
        return this
    }
}

//inheritance
class Admin extends User {
   deleteUser(user) {
       console.log(users)
       //this users is an array which is accessed inside this class
       users = users.filter(u => {
           //returning users whose email id is not equal to the mentioned user
           return u.email != user.email
       })
   }
}

var userOne = new User('doe.edu','Joe')
var userTwo = new User('snow.edu','John')
var admin = new Admin('mcgregor','conan')
var users = [userOne,userTwo,admin]
admin.deleteUser(userTwo)
//userOne.deleteUser(userTwo)
console.log(users)
//method chaining
//userOne.login().updateScore().updateScore().logout()
// the new keyword
// creates an empty object
//sets the value of "this" to be the new empty object
//calls the constructor method
