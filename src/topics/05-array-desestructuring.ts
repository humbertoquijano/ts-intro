const dbz = ['Goku', 'Vegeta', 'Trunks'];
console.log(`Personaje 3: ${dbz[2]}`);


const [,,trunks] = ['Goku', 'Vegeta', 'Trunks'];
console.log(`Personaje 3: ${trunks}`);

const [,,trunksSafe = 'Not Found'] = ['Goku', 'Vegeta'];
console.log(`Personaje 3: ${trunksSafe}`);

export {};