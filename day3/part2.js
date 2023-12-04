const input =
    "467..114..\n" +
    "...*......\n" +
    "..35..633.\n" +
    "......#...\n" +
    "617*......\n" +
    ".....+.58.\n" +
    "..592.....\n" +
    "......755.\n" +
    "...$.*....\n" +
    ".664.598.."

const splitedInput = input.split('\n');
let result = [];
let resultNumber = 0

splitedInput.forEach((line, yPos) => {
    let stockedNumber = '';
    let stockedPos = '';
    let isValid = false;

    for (let xPos = 0; xPos < line.length; xPos++) {
        if (line[xPos].match(/^[0-9]+$/) != null) {

            const notStartY = yPos !== 0;
            const notStartX = xPos !== 0;
            const notEndY = yPos !== splitedInput.length - 1;
            const notEndX = xPos !== line.length - 1;

            stockedNumber += line[xPos];

            // haut
            if (notStartY && splitedInput[yPos - 1][xPos] === '*'){
                isValid = true;
                stockedPos = (yPos - 1) + '|' + xPos
            }
            // bas
            if (notEndY && splitedInput[yPos + 1][xPos] === '*') {
                isValid = true;
                stockedPos = (yPos + 1) + '|' + xPos
            }
            // gauche
            if (notStartX && splitedInput[yPos][xPos - 1] === '*') {
                isValid = true;
                stockedPos = yPos + '|' + (xPos - 1)
            }
            // droite
            if (notEndX && splitedInput[yPos][xPos + 1] === '*'){
                isValid = true;
                stockedPos = yPos + '|' + (xPos + 1)
            }
            // diaq haut gauche
            if (notStartY && notStartX && splitedInput[yPos - 1][xPos - 1] === '*'){
                isValid = true;
                stockedPos = (yPos - 1) + '|' + (xPos - 1)
            }
            // diaq haut droite
            if (notStartY && notEndX && splitedInput[yPos - 1][xPos + 1] === '*'){
                isValid = true;
                stockedPos = (yPos - 1) + '|' + (xPos + 1)
            }
            // diaq bas gauche
            if (notEndY && notStartX && splitedInput[yPos + 1][xPos - 1] === '*'){
                isValid = true;
                stockedPos = (yPos + 1) + '|' + (xPos - 1)
            }
            // diaq bas droite
            if (notEndY  && notEndX && splitedInput[yPos + 1][xPos + 1] === '*'){
                isValid = true;
                stockedPos = (yPos + 1) + '|' + (xPos + 1)
            }

        }
        if(line[xPos].match(/^[0-9]+$/) === null || xPos === line.length - 1){
            if (isValid) {
                result.push({number : stockedNumber, pos : stockedPos});
            }
            stockedNumber = '';
            stockedPos = '';
            isValid = false;
        }
    }
});
let temp = [].concat(result)
result.forEach((item, oldIndex) => {
    temp[oldIndex] = {}
    const index = temp.findLastIndex((e) => e.pos === item.pos)

    if (index !== -1){
        resultNumber += parseInt(item.number) * parseInt(temp[index]?.number ?? 0)
        temp[index] = {}
    }
})

console.log(resultNumber);