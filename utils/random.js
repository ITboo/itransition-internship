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
