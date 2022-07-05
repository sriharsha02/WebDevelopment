class User{
  constructor(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  register(){
    console.log(this.userName + 'is a registered user');
  }
}
class Member extends User{
  constructor(userName, email, password, memberPackage){
    super(userName, email, password);
    this.package = memberPackage;
    let todaysDate = new Date();
    const membershipActiveTillYear = todaysDate.getFullYear();
    const membershipActiveTillMonth = todaysDate.getMonth();
    const membershipActiveTillDay = todaysDate.getDay();
    this.membershipActiveTillDate = new Date(
      membershipActiveTillYear, membershipActiveTillMonth, membershipActiveTillDay
    );
  }
  renewMemberShip(){
    const membershipActiveTillYear = this.membershipActiveTillDate.getFullYear();
    const membershipActiveTillMonth = this.membershipActiveTillDate.getMonth();
    const membershipActiveTillDay = this.membershipActiveTillDate.getDate();
    this.membershipActiveTillDate = new Date(
      membershipActiveTillYear, membershipActiveTillMonth + 1, membershipActiveTillDay
    );
  }
    subscriptionActiveTill(){
      console.log(this.userName + 'is subscribed to package ' + this.package + ' till ' + this.membershipActiveTillDate);
    }
    getPackage(){
      console.log(this.userName + ' is subscribed to ' + this.package + ' package');
    }
  }

  const sri = new Member('sri', 'sri@email.com', '11234', 'standard');
  sri.getPackage();
  sri.renewMemberShip();
  sri.subscriptionActiveTill();

