/* 1.	Create an Author class and a Book class.
Author should have: name, email, gender. 
It should have appropriate getters and setters.
It should have a toString method.

Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
It should have a toString method.*/

class Author{
    constructor(name, email, gender){
    
    this.name = name
    this.email = email
    this.gender = gender
}
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
      get email(){
        return this._email
    }
    set email(value){
        this._email = value 
    }
      get gender(){
        return this._gender
    }
    set gender(value){
        this._gender = value
    }
    toString(){
        return `This author's name is ${this.name}`
    }
}

class Book {
     
    constructor(title, price, quantity, author){
        this.title = title
        this.price = price
        this.quantity = quantity
    }
    setAuthor(value){
        this.author = value
    }
    get title(){
        return this._title
    }
    set title(value){
        this._title = value 
    }
     get author(){
        return this._author
    }
    set author(value){
        this._author= value 
    }
     get price(){
        return this._price
    }
    set price(value){
        this._price= value 
    }
     get quantity(){
        return this._quantity
    }
    set quantity(value){
        this._quantity= value 
    }
    getProfit(){
    return this.price * this.quantity
    }
    toString(){
        return `This book costs ${this.price} USD`
}
}

// let vic = new Author("Victor Hugo", "vc@gmail.com", "male")

// let book = new Book ("Miserable", 100, 20)

// book.setAuthor(vic)



/*2 Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.*/

class Account{
    constructor(name, balance){
        this.name = name
        this.balance = balance
        this._id=Math.random()
    }
   get name(){
       return this._name
   }
   set name(value){
       this._name = value
   }
   get balance(){
       return this._balance
   }
   set balance(value){
       this._balance = value
   }
    get id(){
       return this._id
    }
   credit(amount){
       return this.balance += amount
}
   debit(amount){
       
       if(amount<this.balance){
           return this.balance -= amount
       }else{
           console.log("Amount exceeded balance.")
}
   }
   transferTo(anotherAccount, amount){
      
    if(amount<this.balance){
         anotherAccount.balance+=amount 
         return this.balance -= amount
       }else{
           console.log("Amount exceeded balance.")
}
   }
    static compare(accountFirst, accountSecond) {
  return accountFirst === accountSecond
    
  }
      toString(){
        return `This is ${this.name}'s account`
}
}



/* 3.	Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().

Student is inherited from Person. It should have programs (array of strings), year, fee.
It should have appropriate getters and setters. 
It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.

Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters. 
It should have a toString method.*/

class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }
    get firstName(){
        return this._firstName
    }
    set firstName(value){
        this._firstName = value
    }
      get lastName(){
        return this._lastName
    }
    set lastName(value){
        this._lastName = value 
    }
      get gender(){
        return this._gender
    }
    set gender(value){
        this._gender = value
    }
     get age(){
        return this._age
    }
    set age(value){
        this._age = value
    }
     toString(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(firstName, lastName, gender, age, programs, year, fee){
        super(firstName, lastName, gender, age,)
            this.year = year
            this.fee = fee
            this.programs = programs
            this.data = {}
        }
      get programs(){
        return this._programs
    }
    set programs(value){
        this._programs = value
    }
        get year(){
        return this._year
    }
    set year(value){
        this._year = value
    }
          get fee(){
        return this._fee
    }
    set fee(value){
        this._fee = value
    }
    passExam(program, grade){
        this.data[program] = grade
       if(Object.values(this.data).length === this.programs.length){
            
        if(Object.values(this.data).every(el => el >= 50)){
            return this.year++
        }
    }
    }
    toString(){
        return `${this.firstName} ${this.lastName} studies following programs ${this.programs}`
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, gender, age, program, pay){
       super(firstName, lastName, gender, age,)
        this.program = program
        this.pay = pay
    }
    get program(){
       return this._program
   }
   set program(value){
       this._program = value
   }
       get pay(){
       return this._pay
   }
   set pay(value){
       this._pay = value
   }
   toString(){
       return `${this.firstName} ${this.lastName}'s teaching program is ${this.program}, her/his salary is ${this.pay}`
   }
}
  