import { randomBytes, randomInt, createHmac } from "crypto";

export class FairRandom {
  static generateRandom(range) {
    const key = randomBytes(32).toString("hex");
    const randomValue = randomInt(0, range);
    const hmac = createHmac("sha3-256", key)
      .update(randomValue.toString())
      .digest("hex");
    return { key, randomValue, hmac };
  }
}

export class Probability {
  static calculate(dice) {
    const probabilities = Array.from({ length: dice.length }, () =>
      Array(dice.length).fill(0)
    );

    for (let i = 0; i < dice.length; i++) {
      for (let j = 0; j < dice.length; j++) {
        if (i === j) continue;

        let wins = 0;
        let total = dice[i].length * dice[j].length;

        for (let rollA of dice[i]) {
          for (let rollB of dice[j]) {
            if (rollA > rollB) {
              wins++;
            }
          }
        }

        probabilities[i][j] = wins / total;
      }
    }

    return probabilities;
  }
}
