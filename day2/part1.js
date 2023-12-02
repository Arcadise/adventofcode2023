const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"


const regexGreen = /(\d+)\s+green/;
const regexRed = /(\d+)\s+red/;
const regexBlue = /(\d+)\s+blue/;
const splitedInput = input.split('\n');
let result = 0;

splitedInput.forEach((game, index) => {

    let resultText = 'Game ' + (index + 1) + ' : ';
    let invalidGame = false;

    game.split(';').forEach((set) => {

        const matchGreen = set.match(regexGreen);
        const matchRed = set.match(regexRed);
        const matchBlue = set.match(regexBlue);

        const nbGreen = matchGreen ? parseInt(matchGreen[1]) : 0;
        const nbRed = matchRed ? parseInt(matchRed[1]) : 0;
        const nbBlue = matchBlue ? parseInt(matchBlue[1]) : 0;

        if (nbGreen > 13 || nbRed > 12 || nbBlue > 14) {
            invalidGame = true;
        }
    })
    if (invalidGame) {
        resultText += 'Impossible';
    } else {
        resultText += 'Possible';
        result += (index + 1);
    }

    console.log(resultText)
})

console.log('Total : ' + result)
