export class Person {
    public name: string;
    private address: string;
    
    constructor(name: string, address: string) {
        this.address = address;
        this.name = name;
    }
}

export class Token {
    constructor(
        public hash: string,
        private key: string = 'No key'
    ) {}
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        // must provide two args for Person
        super('this is a bad idea', ' better prefer composition')
    }
}

export class BetterHero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) { }
}