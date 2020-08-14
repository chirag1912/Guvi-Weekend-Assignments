//Bank Class:

class Bank{
	constructor(){
		this.code;
		this.address;
		this.ATM;			//Bank contains ATM and Mutiple account class as parameter;
		this.account=[];	//as multiple accounts;
	}
}

class Customer{
	constructor(){
		this.name;
		this.address;
		this.dob;
		this.cardnum;
		this.pin;
		this.account=accObj(setAcc); //A customer has a relation with Account Class; //can have upto 2 accounts;
	}

	setAcc(accObj){
		if(this.account.length<2){
			account.push(accObj);
		}
	}
	verifyPassword(_pass){
		if(_pass!=this.pin){
			return -1;
		}else{
			console.log("Enter the amt");
		}
	}
}

class ATM{
	constructor(){
		this.loc;
		this.managedby;
		this.currentCust=custObj1;	//As Customer Arrows to the ATM; ATM has an Object of Cust;
	}
	identifies(){}
	transactions(){}
}

class Account{
	constructor(){
	this.number;
	this.balance;
	}
}

class currentAcc extends Account{
	constructor(){
		this.accno;
		this.balance;
	}
}

class savingsAcc extends Account{
	constructor(){
		this.accno;
		this.balance;
	}
}


