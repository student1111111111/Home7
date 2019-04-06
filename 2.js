//1.	Задача. Відсортувати масив імен за останньою літерою
let lastLetterNames = ['Ivan', 'Volodya', 'Nikitos', 'Igor', 'Oleg']
lastLetterNames.sort((a, b) => {
    if (a[a.length - 1] > b[b.length - 1])
        return 1
    if (a[a.length - 1] < b[b.length - 1])
        return -1
    else
        return 0

})
document.write(`${lastLetterNames} <br/>`)
//2.	Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).
const otherPrice = [1000, 2000, 5000, 20, 367, 456, 998, 1000, 2000, 5000, 20, 367, 456, 998]
otherPrice.forEach((x, i, arr) => x >= 1000 ? arr[i] = Math.floor(x * 0.8) : arr[i] = Math.floor(x * 0.95))
document.write(`${otherPrice} <br/>`)
//3.	Задача. Дано масив років народження працівників. Вивести масив тих, які є призовного віку (менше 25 років).
const empYears = [1992, 1983, 1998, 2004, 2001]
const newEmp = empYears.filter(x => 2019 - x < 25)
document.write(`${newEmp} <br/>`)
//4.	Задача. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.
const gemo = [77, 111, 333, 434, 22]
const newGemo = gemo.filter(x => x < 115)
document.write(`${newGemo} <br/>`)
//5.	Задача. Дано масив цін товарів. Сформувати масив тих, які є меншими за 2000грн.
const priceItems = [2222, 222, 3333, 333, 1111, 11]
const newPrice = priceItems.filter(x => x < 2000)
document.write(`${newPrice} <br/>`)
//6.	Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.
const initPrice = [11, 222, 1444, 1555, 5444, 2333, 1222, 1555]
const sumInitPrice = initPrice.reduce((last, x) => x >= 1000 && x <= 2000 ? last + x : last, 0)
document.write(`Сума товарів ${sumInitPrice} <br/>`)
//7.	Задача. Дано масив номерів автомобілів. Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».
const autoCode = ['AO3829BP', 'KO3829BP', 'AE6780OP', 'AO3829BT']
const newAutoCode = autoCode.filter(x => x[0] == 'A' && x[x.length - 1] == 'P')
document.write(`${newAutoCode} <br/>`)
//8.	Задача. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер
const allLetters = ['а', 'б', 'є', 'і', 'а', 'к', 'и', 'н', 'т', 'у', 'з', 'ж']
let vowelsStr = allLetters.reduce((last, x) => {
    const vowels = ['а', 'о', 'у', 'і', 'и', 'е', 'ї', 'ю', 'я', 'є']
    if (vowels.indexOf(x) >= 0)
        return last + x
    else
        return last
}, '')
document.write(`${vowelsStr} <br/>`)
