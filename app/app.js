import { CONFIG } from "../config/config.js";
import { consoleColors } from "../constants/consoleColors.js";
import { MESSAGES } from "../constants/messages.js";
import { FairRandom } from "../utils/random.js";
import readline from "readline-sync";

export class App {
  constructor(dice) {
    this.dice = dice;
  }

  start() {
    const { randomValue, hmac, key } = FairRandom.generateRandom(2);  
    console.log(MESSAGES.FIRST_MOVE);
    console.log(consoleColors.gray, `HMAC=${hmac}`);
    while (true) {
      const choice = readline.question(MESSAGES.QUESTION.START);
      if (choice.toUpperCase() === CONFIG.EXIT_GAME) process.exit();
      if (choice === CONFIG.HELP) {
        console.log(MESSAGES.HELP.START);
        continue;
      }
      const numChoice = parseInt(choice);
      if (!isNaN(numChoice) && (numChoice === 0 || numChoice === 1)) {
        console.log(`My selection: ${randomValue}`)
        console.log(consoleColors.gray, `KEY=${key})`);
        if (numChoice === randomValue) {
          console.log(MESSAGES.USER_FIRST);
          return true;
        }
        console.log(MESSAGES.PC_FIRST);
        return false;
      }
      console.log(MESSAGES.INVALID_INPUT.CHOICE);
    }
  }
}
