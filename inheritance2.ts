interface Person {
    name: string,
    age: number
}

class PersonDetails implements Person{
    name: string;
    age: number;
    constructor(){
        this.name = "Kanrakar"
        this.age = 30
        console.log(this.name, this.age)
    }
}
console.log(new PersonDetails())

