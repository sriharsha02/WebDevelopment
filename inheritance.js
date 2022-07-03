class User{
  static count = 0;
  constructor(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
    User.count++;
  }
  register(){
    console.log(this.userName + ' is now registered.')
  }
  userCount(){
    console.log('Number of registered users : ' + User.count);
  }
}
const sri = new User('sri', 'sri@gmail.com', 'pass123');
const harsha = new User('harsha', 'harsha@gmail.com', 'pass123');
sri.register();

class Member extends User{
  constructor(userName, email, password, memberPackage){
    super(userName, email, password);
    this.package = memberPackage;
  }
  getPackage(){
    console.log(this.userName + ' is subscribed to ' + this.package + ' package');
  }
}
const sriharsha = new Member('sri', 'sri@email.com', 'pass123', 'standard');
sriharsha.getPackage();

console.log(User.count);

console.log(sri.userCount())