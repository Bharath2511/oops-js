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

var userOne = new User('doe.edu','Joe')
console.log(userOne)
//method chaining
userOne.login().updateScore().updateScore().logout()
// the new keyword
// creates an empty object
//sets the value of "this" to be the new empty object
//calls the constructor method