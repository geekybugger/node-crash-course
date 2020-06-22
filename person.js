class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hi ${this.name} you are ${this.age} years old `);
    }
    
}


module.exports = Person;