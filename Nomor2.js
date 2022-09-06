class Animal{
    constructor(name, age, legs, species, status){
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    }
    introduce(){
        return `hello, my name is ${this.name} and I am ${this.age} years old`
    }
}

class Shark extends Animal{
    constructor(name, age, status){
        super(name, age, 0, 'shark', status)
    }
    introduceShark(){
        return `${this.introduce()}, I have ${this.legs} leg, I am ${this.species}, and I am always ${this.status}`
    }
}
class Cat extends Animal{
    constructor(name, age, status){
        super(name, age, 4, 'cat', status)
    }
    introduceCat(){
        return `${this.introduce()}, I have ${this.legs} leg, I am ${this.species}, and I am always ${this.status}`
    }
}

class Dog extends Animal{
    constructor(name, age, status, master){
        super(name, age, 4, 'dog', status)
        this.master = master
    }
    greetMaster(){
        return `${this.introduce()} I have ${this.legs} leg, I am ${this.species}, I am always ${this.status} ,and I have a master, my master name is ${this.master}`
    }
}


let sh = new Shark('hiu', 10, 'berenang')
console.log(sh.introduceShark())
let ct = new Cat('kucing', 10, 'berlari')
console.log(ct.introduceCat())
let dg = new Dog('anjing', 10, 'berlari', 'samsul')
console.log(dg.greetMaster())