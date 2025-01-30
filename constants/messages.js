export const MESSAGES = {
  WELCOME: "Welcome to the Dice Game!\u{1F44B}",
  INVALID_INPUT: {
    QUANTITY:
      "\u{1F534} Error: At least 3 dice configurations are required. Example usage:\nnpm run app 2,2,4,4,9,9 6,8,1,1,8,6 7,5,3,7,5,3",
    TYPE: `\u{1F534} Invalid input: Dice configuration must only contain integers.`,
    LENGTH: `\u{1F534} Invalid input: Each dice must have exactly 6 integers.`,
    CHOICE: "\u{1F534} Invalid choice. Try again.",
  },
  FIRST_MOVE: "\u{1F4AC} Let's determine who makes the first move.",
  HELP: {
    START: "\u{1F4AC} Enter 0 or 1 to guess, or X to exit.",
  },
  USER_FIRST: "\u{1F464} Correct! User makes the first move.",
  PC_FIRST: "\u{1F4BB} Computer makes the first move",
  QUESTION: {
    START: "Your choice (0 or 1, ? for help, X to exit):",
  },
};
