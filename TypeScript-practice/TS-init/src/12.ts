export {};

const getText1: (name: string, age: number) => string = function(name, age) {
    return '';
}

function getText2(name: string, age: number, language?:string): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    const languageText = language ? language.substr(0, 10): '';
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

getText2('mike', 23, 'ko');
getText2('mike', 23);
getText2('mike', 23, 123);