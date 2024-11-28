function escape_encode(input){
    let result = '';
    let i = 0;
    
    while (i<input.length) {
        let currentSimbol = input[i];
        let length = 1;
        
        while (currentSimbol == input[length+i]){
            length++;
        }
    
        if (length<=2){
            result += currentSimbol.repeat(length);
        }

        else{
            result += length + currentSimbol;
        }
        i += length;
        
    }
    return result;
}

let fs = require('fs'); //подключили библиотеку

var inText = fs.readFileSync('input.txt'); //считали из файла
var a = inText.toString() //сохранили в переменную как строку

encode_str = escape_encode(a);
fs.writeFileSync('code.txt', encode_str);

console.log("Коэффициент сжатия = ", a.length/encode_str.length); // вывели степень сжатия