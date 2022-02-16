export {};

function getText(name: string, age:number): string {
    const nameText = name.substr(0,10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}`;
}

const v1: string = getText('mike', 23);
// const v2: string = getText('mike', '23');
// const v3: number = getText('mike', 23);

console.log(v1);