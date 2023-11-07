const name: string = 'beto';

let hpoints: number = 95;

let mixedVal: number | string = 145;

// only string allowed 'BASIC'
let mixAndFixedVal: number | 'BASIC'; 
mixAndFixedVal = 'BASIC';

const allOk: boolean = true;

console.log({
    name, hpoints, mixedVal, mixAndFixedVal, allOk
});

export {};