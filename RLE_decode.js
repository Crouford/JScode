function escape_decode(input){
    let result = '';
    let i = 0;
    let numbers = "1234567890";

    while (i<input.length) {
        var count = '';
        while(numbers.indexOf(input[i])!=-1){
            count+=input[i];
            i++;
        }
        if(count.length>0){
            count = Number(count)
            result += input[i].repeat(count-1);
        }
        else{
            result += input[i]
            i++;
        }

        
        
    }

    return result;
}

let fs = require('fs'); //подключили библиотеку
var inCode = fs.readFileSync('code.txt');
var b = inCode.toString()
decode_str = escape_decode(b);
fs.writeFileSync('decode.txt', decode_str);

console.log("Коэффициент сжатия = ", decode_str.length/b.length);