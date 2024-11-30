function code_compression(input) {
    let result = '';
    let i = 0;

    while (i < input.length) {
        let currentSym = input[i];
        let length_same_sym = 1;

        // Подсчет длины последовательности одинаковых символов
        while (currentSym == input[length_same_sym+i]) {
            length_same_sym++;
        }

        if (length_same_sym <= 2) {
            result += currentSym.repeat(length_same_sym); // Оставляем символы как есть
        } else {
            result += length_same_sym + currentSym; // Добавляем количество и символ
        }

        i += length_same_sym; // Переходим к следующей группе символов
    }

    return result;
}

// Подключение библиотеки 
let fs = require('fs');

// Читаем входной файл
var inText = fs.readFileSync('input.txt', 'utf-8'); // Убедитесь, что файл существует
var a = inText.toString(); // Преобразуем в строку

// Сжимание строку 
let encode_str = code_compression(a);

// Записываем в файл
fs.writeFileSync('out_code.txt', encode_str);

console.log("Коэффициент сжатия = ", (a.length / encode_str.length)); // вывод кэфа
