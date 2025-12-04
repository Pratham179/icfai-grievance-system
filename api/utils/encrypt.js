import crypto from "crypto";

const key = process.env.SECRET_KEY;

export function encrypt(text) {
  const cipher = crypto.createCipher("aes-256-ctr", key);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
}
