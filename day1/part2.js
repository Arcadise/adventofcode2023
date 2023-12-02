const input = "two1nine\n" +
    "eightwothree\n" +
    "abcone2threexyz\n" +
    "xtwone3four\n" +
    "4nineeightseven2\n" +
    "zoneight234\n" +
    "7pqrstsixteen";

const splitedInput = input.split('\n');
let result = 0;
const matchingList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

splitedInput.forEach((item) => {
    let numberList = [];
    let numberChain = '';
    for (let i = 0; i < item.length; i++) {
        numberChain += item[i];
        const match = matchingList.findIndex(e => (numberChain + item[i]).includes(e));

        if (item[i].match(/^[0-9]+$/) != null) {
            numberList.push(item[i]);
            numberChain = numberChain[numberChain.length -1];
        }
        if (match !== -1) {
            numberList.push(match + 1);
            numberChain = numberChain[numberChain.length -1];
        }
    }
    result += parseInt(numberList[0] + '' + numberList[numberList.length - 1]);
})

console.log('Result : ' + result);
