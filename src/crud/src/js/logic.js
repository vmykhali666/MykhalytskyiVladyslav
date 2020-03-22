function User(id, age, firstName, email, lastName, phone) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  this.phone = phone;
  this.mainTag;
}

module.exports = User;
