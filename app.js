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
userOne.login()
userOne.logout()
console.log(userOne.name)