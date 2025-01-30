import readline from "readline-sync";
import { FairRandom } from "./random.js";
import { MESSAGES } from "../constants/messages.js";
import { consoleColors } from "../constants/consoleColors.js";
import { CONFIG } from "../config/config.js";

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
      if (
        !isNaN(numChoice) &&
        !usedDice.includes(numChoice) &&
        dice[numChoice]
      ) {
        console.log(`User choses the dice: [${dice[numChoice].join(",")}]`);
        return numChoice;
      }
      console.log(MESSAGES.INVALID_INPUT.CHOICE);
    }
  }

  throwDice(die) {
    const { randomValue, hmac, key } = FairRandom.generateRandom(die.length);
    console.log(MESSAGES.RANDOM);
    console.log(consoleColors.gray, `HMAC=${hmac}`);
    while (true) {
      const choice = readline.question(
        `Add your number (or put ? for help, X to exit): `
      );
      if (choice.toUpperCase() === CONFIG.EXIT_GAME) process.exit();
      if (choice === CONFIG.HELP) {
        console.log(
          `Enter a number between 0 and ${die.length - 1}, or X to exit.`
        );
        continue;
      }
      const numChoice = parseInt(choice);
      if (!isNaN(numChoice) && numChoice >= 0 && numChoice < die.length) {
        const result = (randomValue + numChoice) % die.length;
        console.log(`PC number: ${randomValue}`);
        console.log(consoleColors.gray,
          `(KEY=${key}). Result: ${randomValue} + ${numChoice} = ${result} (mod ${die.length}).`
        );
        return die[result];
      }
      console.log(MESSAGES.INVALID_INPUT.CHOICE);
    }
  }
}
