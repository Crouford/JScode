let fs = require('fs'); 

function decompression(input) {
    let result = '';
    let i = 0;
    let numbers = "0123456789";

    while (i < input.length) {
        var count = '';
        while (numbers.indexOf(input[i]) != -1) {
            count += input[i];
            i++;
        }
        if (count.length > 0) {
            count = Number(count);
            result += input[i].repeat(count - 1);
        } else {
            result += input[i];
            i++;
        }
    }

    return result;
}

var file = fs.readFileSync('out_code.txt');
var str_file = file.toString();
decode_str = decompression(str_file);
fs.writeFileSync('out_decode.txt', decode_str);

console.log("Коэффициент сжатия = ", decode_str.length / str_file.length);
