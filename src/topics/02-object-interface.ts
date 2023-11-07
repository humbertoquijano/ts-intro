const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hpPoint: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hpPoint: 175,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.table(strider);

export {};