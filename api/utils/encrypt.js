import crypto from "crypto";

export function encrypt(text) {
  const algorithm = "aes-256-ctr";

  // Read SECRET_KEY only when function is called (not before dotenv loads)
  const secret = process.env.SECRET_KEY;

  if (!secret) {
    throw new Error("SECRET_KEY is missing from environment");
  }

  // AES-256 requires 32 bytes key
  const key = Buffer.from(secret.slice(0, 32));
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);

  return iv.toString("hex") + ":" + encrypted.toString("hex");
}
