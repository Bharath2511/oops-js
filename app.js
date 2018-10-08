class User {
    //constructor is a function that creates our object
    constructor(email,name) {
         this.email = email
         this.name = name
    }
    login() {
        console.log(this.email, 'just logged in')
    }
    logout() {
        console.log(this.email, 'just logged out')
    }
}

var userOne = new User('doe.edu','Joe')
console.log(userOne)
userOne.login()
userOne.logout()
// the new keyword
// creates an empty object
//sets the value of "this" to be the new empty object
//calls the constructor method