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
const unvalidChar = ['1' , '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
let result = 0;

splitedInput.forEach((line, yPos) => {
    let stockedNumber = '';
    let isValid = false;

    for (let xPos = 0; xPos < line.length; xPos++) {
        if (line[xPos].match(/^[0-9]+$/) != null) {

            const notStartY = yPos !== 0;
            const notStartX = xPos !== 0;
            const notEndY = yPos !== splitedInput.length - 1;
            const notEndX = xPos !== line.length - 1;

            stockedNumber += line[xPos];

            // haut
            isValid = (notStartY && !unvalidChar.includes(splitedInput[yPos - 1][xPos])) || isValid;
            // bas
            isValid = (notEndY && !unvalidChar.includes(splitedInput[yPos + 1][xPos])) || isValid;
            // gauche
            isValid =( notStartX && !unvalidChar.includes(splitedInput[yPos][xPos - 1])) || isValid;
            // droite
            isValid = (notEndX && !unvalidChar.includes(splitedInput[yPos][xPos + 1])) || isValid;
            // diaq haut gauche
            isValid = (notStartY && notStartX && !unvalidChar.includes(splitedInput[yPos - 1][xPos - 1])) || isValid;
            // diaq haut droite
            isValid = (notStartY && notEndX && !unvalidChar.includes(splitedInput[yPos - 1][xPos + 1])) || isValid;
            // diaq bas gauche
            isValid = (notEndY && notStartX && !unvalidChar.includes(splitedInput[yPos + 1][xPos - 1])) || isValid;
            // diaq bas droite
            isValid = (notEndY  && notEndX && !unvalidChar.includes(splitedInput[yPos + 1][xPos + 1])) || isValid;

        }
        if(line[xPos].match(/^[0-9]+$/) === null || xPos === line.length - 1){
            if (isValid) {
                result += parseInt(stockedNumber);
            }
            stockedNumber = '';
            isValid = false;
        }
    }
});

console.log("Result : " + result);