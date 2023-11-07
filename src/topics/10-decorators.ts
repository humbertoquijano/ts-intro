function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'n p';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProp: string = 'aaasss';

    print(){
        console.log('hi hi !!');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);