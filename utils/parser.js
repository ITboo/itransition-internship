import { consoleColors } from "../constants/consoleColors.js";
import { MESSAGES } from "../constants/messages.js";

const DICE_REQUIRED = 3;
const DICE_LENGTH = 6;

export class InputParser {
  static parse(args) {
    if (args.length < DICE_REQUIRED) {
      throw new Error(
        console.log(MESSAGES.INVALID_INPUT.QUANTITY)
      );
    }
    return args.map((arg) => {
      const dice = arg.split(",").map((value) => {
        if (!/^\d+$/.test(value)) {
          throw new Error(
            console.log(MESSAGES.INVALID_INPUT.TYPE)
          );
        }
        return Number(value);
      });
      if (dice.length !== DICE_LENGTH) {
        throw new Error(
          console.log(MESSAGES.INVALID_INPUT.LENGTH)
        );
      }
      return dice;
    });
  }
}
