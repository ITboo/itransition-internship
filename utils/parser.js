import { CONFIG } from "../config/config.js";
import { MESSAGES } from "../constants/messages.js";

export class InputParser {
  static parse(args) {
    if (args.length < CONFIG.DICE_REQUIRED) {
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
      if (dice.length !== CONFIG.DICE_LENGTH) {
        throw new Error(
          console.log(MESSAGES.INVALID_INPUT.LENGTH)
        );
      }
      return dice;
    });
  }
}
