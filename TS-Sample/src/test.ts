type User = {
    name : String;
    email : String;
    age?: Number
}

interface Animal {
    legs: Number;
    eyes: Number;
    speak: () => String 
}

class Dog implements Animal {
    
    breed?: String;
    legs:Number;   
    eyes:Number;

    constructor(eyes:Number, legs:Number)  {
        this.legs = legs;
        this.eyes = eyes;
    }

    speak():String {
        return 'Bow Bow'
    }
};

const d = new Dog(2,4)

function test(u:User) {
    console.log( u.email+ ':' + u.name);
}

const u1:User = {
    name:'Aditya',
    email:'a@a.com'
}

test(u1)