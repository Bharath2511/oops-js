//understanding object oriented programming
const userOne = {
    email : 'john@gmail.com',
    name : 'John',
    login() {
        console.log(this.email,'has logged in')
    },
    logout() {
        console.log(this.email, 'has logged out')
    }
}
//accessing object properties
userOne.login()
userOne.logout()
console.log(userOne.name)
//changing props
userOne['name'] = 'mario'
userOne['email'] = 'mario.edu'
//dynamic usage of objects
var prop = 'name'
console.log(userOne[prop])
//we can also create new properties
userOne.age = 22
console.log(userOne)

