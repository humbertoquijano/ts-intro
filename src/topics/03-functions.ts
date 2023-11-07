function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    let partial: number = firstNumber * base;
    
    if (secondNumber)
        partial = partial * secondNumber;

    return partial;
}

const result: number = addNumbers(1, 2);
const resultArrow: string = addNumbersArrow(1, 2);
const multival: number = multiply(5);
const multivalSec: number = multiply(5, 4);

console.log({result, resultArrow, multival, multivalSec});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de salud=[${this.hp}]`)
    },
};

strider.showHp();

healCharacter(strider, 30);

strider.showHp();

export {};