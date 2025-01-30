# Welcome to the Dice Game!👋

The victory is defined as follows—computer and user select different dice, perform their "throws," and whoever rolls higher wins. 

- dice configuration is passed as command line arguments
- if the arguments are incorrect, error message is displayed
- user can get help message by pressing ?
- user can exit by pressing X
- app determines who makes the first move
- "fair random" implemented
- HMAC is used to prove that computer did't change its number after user made the selection

TO-DO:
- update table display

#How to start

1. Clone this repo

   `git clone https://github.com/ITboo/itransition-internship.git`
   
2. Switch branch to `task-3`
   
   `git switch task-3`
   
3. Install dependencies

   `npm install`
   
4. Start the game
   `npm run app <dice1>, <dice2>, <dice3>`
   
NOTE: you should provide each dice as an array of integer numbers (like `1,2,3,4,5,6`). The app works only with 6-length values
