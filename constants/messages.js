export const MESSAGES = {
  WELCOME: "Welcome to the Dice Game!",
  INVALID_INPUT: {
    QUANTITY:
      "Error: At least 3 dice configurations are required. Example usage:\nnpm run app 2,2,4,4,9,9 6,8,1,1,8,6 7,5,3,7,5,3",
    TYPE: `Invalid input: Dice configuration must only contain integers.`,
    LENGTH: `Invalid input: Each dice must have exactly 6 integers.`,
  },
};
