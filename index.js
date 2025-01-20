import { createHash } from "crypto";
import { readFileSync, readdir } from "fs";
import { join } from "path";

const dirPath = "./files";
const email = "email@sample.com".toLowerCase();

function calculate(filePath) {
  const fileBuffer = readFileSync(filePath);
  return createHash("sha3-256").update(fileBuffer).digest("hex");
}

readdir(dirPath, (err, files) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  let hashes = files.map((file) => calculate(join(dirPath, file)));
  hashes.sort().reverse();

  let concatenatedHash = hashes.join("") + email;
  let finalHash = createHash("sha3-256").update(concatenatedHash).digest("hex");

  console.log("Result:", finalHash);
});
