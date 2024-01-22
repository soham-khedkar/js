const User = {
  _email:"sk@google.com",
  _age: '18',

  get email(){
  return this._email.toUpperCase()
  },
  set email (value){
   this._email = value
  }
}

const hi = Object.create(User)
console.log(hi.email);