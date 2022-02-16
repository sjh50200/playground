export {};

enum Fruit {
    Apple,
    Banana = 5,
    Orange,
}
console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);

// var Fruit;
// (function (Fruit) {
//     Fruit[(Fruit['Apple'] = 0)] = 'Apple';
//     Fruit[(Fruit['Banana'] = 5)] = 'Banana';
//     Fruit[(Fruit['Orange'] = 6)] = 'Orange';
// }) (Fruit || (Fruit = {}));
// console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange)

enum Language {
    Korean = 'ko',
    English = 'en',
    Japanese = 'jp',
}

// var Language;
// (function (Language) {
//     Lagnuage['Korean'] = 'ko';
//     Language['English'] = 'en';
//     Language['Japanese'] = 'jp';
// }) (Language || (Language = {}));