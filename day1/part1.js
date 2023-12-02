const input = "1abc2\n" +
    "pqr3stu8vwx\n" +
    "a1b2c3d4e5f\n" +
    "treb7uchet";

const splitedInput = input.split('\n');
let result = 0

splitedInput.forEach((item) => {
    let numberList = [];
    for (let i = 0; i < item.length; i++) {
        if ( item[i].match(/^[0-9]+$/) != null){
            numberList.push(item[i])
        }
    }
    result += parseInt(numberList[0] + '' + numberList[numberList.length - 1])
})

console.log('Result : ' + result);
