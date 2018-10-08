class User {
    //constructor is a function that creates our object
    constructor(email,name) {
         this.email = email
         this.name = name
    }
}

var userOne = new User('doe.edu','Joe')
console.log(userOne)
// the new keyword
// creates an empty object
//sets the value of "this" to be the new empty object
//calls the constructor method