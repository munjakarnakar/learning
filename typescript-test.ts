interface dataObj {
    name?: string,
    age?: number
}

class BaseC {
    private x = 0
    public y = 1
    protected w = 2
    public readonly v = 19
    constructor() {
        console.log(this.x, this.y, this.w)
    }

    one(params: String): dataObj {
        console.log(this.x, this.y, this.w, params)
        return { name: "Base" };
    }
}

class DerivedC extends BaseC {
    public d = 0;
    constructor() {
        super()
        console.log(super.one("12"))
        // this.v = 12;
        console.log(this.y, this.w)
    }

    one(params: String, params2?: String): dataObj {
        return { name: "Derived" }
    }
}


class DerivedCc extends DerivedC {
    constructor() {
        super()
        this.d
    }

}

// const t = new Base()
// console.log(t.one('hello'))

const hhhhhasjdashhhas = new DerivedC()
console.log(hhhhhasjdashhhas.one("123"))
console.log(hhhhhasjdashhhas.one("123", "123"))

const hh: BaseC = hhhhhasjdashhhas
console.log(hh.one(''))

// ------------------- 1

interface intrTest {
    hello(): dataObj
}

interface intrTest2 {
    hello1(): dataObj
}

class one implements intrTest {
    hello(): dataObj {
        return {}
    }
}


class two implements intrTest, intrTest2 {
    hello(): dataObj {
        return {}
    }

    hello1(): dataObj {
        return {}
    }
}



class p {
    public x: number = 1
}

class p1 extends p {
    protected x1: number = 2
}


class p2 extends p1 {
    f1(other:p2){
        console.log(other.x1)
    }

    f2(other: p1){
        // console.log(p1.x)
    }
}


class classOne{
    static y: number  = 2
    private static x: number  = 2
    func(){
        return classOne.x;
    }
}


class clasTwo extends classOne {
    constructor(){
        super()
        console.log(this.func(), 'static check')
    }
}

console.log(classOne.y)
// console.log(classOne.x)

const c = new clasTwo()
c.func()

class callArrow{
    getname = () => {
        const x = 10
        return x;
    }
}

console.log(new callArrow().getname())



abstract class absBase{
    abstract getName() : String
    print(){
        console.log(this.getName())
    }
}

class absDerived extends absBase{
    getName(): String {
        return ""
    }
}