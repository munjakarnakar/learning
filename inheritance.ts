class Parent {
    Name: string;
    constructor(name) {
        this.Name = name;
    }
}

class Child extends Parent {
    ChildName: string;
    constructor(childName) {
        super("Karnakar")
        this.ChildName = childName;
    }

    display = () => {
        console.log(`Paranet: ${this.Name} Child: ${this.ChildName}`)
    }
}

class Child2 extends Child {
    ChildName2: string;
    constructor(childName2) {
        super("Simba1")
        this.ChildName2 = childName2;
    }

    display2 = () => {
        console.log(`Paranet: ${this.Name} Child:${this.ChildName} Child2: ${this.ChildName2}`)
    }

}



const chObj = new Child2("Simba2");
chObj.display2()


