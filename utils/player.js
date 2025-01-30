import readline from "readline-sync";
import { MESSAGES } from "../constants/messages";
import { CONFIG } from "../config/config";
import { consoleColors } from "../constants/consoleColors";
// PC or User
export class Player {
    constructor(name) {
        this.name = name;
    }

    chooseDice(dice, usedDice) {
        console.log(`${this.name}, choose a dice:`);
        dice.forEach((die, index) => {
            if (!usedDice.includes(index)) {
                console.log(`${index}: ${die.join(",")}`);
            }
        });
        while (true) {
            const choice = readline.question(MESSAGES.QUESTION.START);
            if (choice.toUpperCase() === CONFIG.EXIT_GAME) process.exit();
            if (choice === CONFIG.HELP) {
                console.log(MESSAGES.QUESTION.DICE_CHOOSE);
                continue;
            }
            const numChoice = parseInt(choice);
            if (!isNaN(numChoice) && !usedDice.includes(numChoice) && dice[numChoice]) {
                console.log(`You chose the dice: [${dice[numChoice].join(",")}]`);
                return numChoice;
            }
            console.log(MESSAGES.INVALID_INPUT.CHOICE);
        }
    }

    throwDice(die) {
        const { randomValue, hmac, key } = FairRandomGenerator.generateRandom(die.length);
        console.log(MESSAGES.RANDOM);
        console.log(consoleColors.gray, `HMAC=${hmac}`);
        while (true) {
            const choice = readline.question("Add your number modulo dice length (or ? for help, X to exit): ");
            if (choice.toUpperCase() === CONFIG.EXIT_GAME) process.exit();
            if (choice === CONFIG.HELP) {
                console.log("Enter a number between 0 and dice length - 1, or X to exit.");
                continue;
            }
            const numChoice = parseInt(choice);
            if (!isNaN(numChoice) && numChoice >= 0 && numChoice < die.length) {
                const result = (randomValue + numChoice) % die.length;
                console.log(
                    `My number: ${randomValue} (KEY=${key}). Result: ${randomValue} + ${numChoice} = ${result} (mod ${die.length}).`
                );
                return die[result];
            }
            console.log(MESSAGES.INVALID_INPUT.CHOICE);
        }
    }
}