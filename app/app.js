import readline from "readline-sync";
import { Tables } from "../utils/table.js";
import { Player } from "../utils/player.js";
import { FairRandom, Probability } from "../utils/random.js";
import { consoleColors } from "../constants/consoleColors.js";
import { MESSAGES } from "../constants/messages.js";
import { CONFIG } from "../config/config.js";

export class App {
  constructor(dice) {
    this.dice = dice;
    this.usedDice = [];
    this.user = new Player("User");
    this.computer = new Player("PC");
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
        console.log(`My selection: ${randomValue}`);
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
  showTable() {
    const probabilities = Probability.calculate(this.dice);
    Tables.generate(this.dice, probabilities);
  }

  pcMove() {
    const choices = this.dice
      .map((_, index) => index)
      .filter((index) => !this.usedDice.includes(index));
    const choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`PC chooses the dice: [${this.dice[choice].join(",")}]`);
    return choice;
  }

  play() {
    this.showTable();
    const userStarts = this.start();
    let userDie, computerDie;
    if (userStarts) {
      userDie = this.user.chooseDice(this.dice, this.usedDice);
      this.usedDice.push(userDie);
      computerDie = this.pcMove();
    } else {
      computerDie = this.pcMove();
      this.usedDice.push(computerDie);
      userDie = this.user.chooseDice(this.dice, this.usedDice);
    }

    const computerThrow = this.computer.throwDice(this.dice[computerDie]);
    const userThrow = this.user.throwDice(this.dice[userDie]);

    console.log(`PC throw: ${computerThrow}`);
    console.log(`User throw: ${userThrow}`);
    if (userThrow > computerThrow) {
      console.log(MESSAGES.USER_WIN);
    } else if (userThrow < computerThrow) {
      console.log(consoleColors.cyan, MESSAGES.PC_WIN);
    } else {
      console.log(consoleColors.yellow, MESSAGES.TIE);
    }
  }
  
}
