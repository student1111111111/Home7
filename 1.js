//Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.
const numbers = [1, -2, 3, -4, -5, -12, 5, 66, -123123]
numbers.forEach((x, i, arr) => x < 0 ? arr[i] = 0 : x)
document.write(`${numbers} <br/>`)
//Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.
const prices = [100, 200, 350, 600, 700, 243]
const price = 380
let newPrices = prices.filter(x => x < price)
document.write(`${newPrices} <br/>`)
//Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.
const otherPrice = [1000, 2000, 5000, 20, 367, 456, 998]
let checkPrice = otherPrice.map(x => x < 1000 ? Math.floor(x * 1.2) : Math.floor(x * 0.7))
document.write(`${checkPrice} <br/>`)
//Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.
const names = ['Vasya', 'Vova', 'Viktor', 'Ivan', 'Oleg']
const letter = 'V'
let newNames = names.filter(x => x[0] == letter)
document.write(`${newNames} <br/>`)
//Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).
const weights = [444, 555, 666, 777, 8889]
weights.every(x => x <= 2000) ? document.write(`Всі легкові <br/>`) : document.write(`Не всі легкові <br/>`)
//Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.
const clients = [15, 17, 22, 6, 43, 19, 12]
clients.some(x => x <= 10) ? document.write(`Було меньше 10 <br/>`) : document.write(`Завжди більше 10 <br/>`)
//Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
const letters = ['z', 'a', 's', 'a', 'r', 's', 'a']
const checkLetter = 'a'
let countLetters = letters.reduce((last, x) => x == checkLetter ? last + 1 : last, 0)
document.write(`Кількість '${checkLetter}' - ${countLetters} <br/>`)
//Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.
const prodNumbers = [5, 11, 2, 3]
let prod = prodNumbers.reduce((last, x) => last * x)
document.write(`Добуток - ${prod} <br/>`)
//Задача 9. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.
const someNumbers = [1, 2, 3 - 1, 44, -22, 123, -12]
someNumbers.sort((a, b) => b - a)
document.write(`Максимальне число ${someNumbers[0]} <br/>`)
