import { App } from "./app/app.js";
import { InputParser } from "./utils/parser.js";
import { MESSAGES } from "./constants/messages.js";

try {
  const args = process.argv.slice(2);
  const dice = InputParser.parse(args);
  console.log(MESSAGES.WELCOME);

  const game = new App(dice);
  game.play();
} catch (error) {
  console.error(error.message);
}
