const crypto = require("crypto");

// Exemplo do pbkdf2Sync
const password = "minhaSenha";

function generatePassword(password) {
  const salt = "frase para misturar na criptografia";
  const iterations = 1000;
  const keylen = 64;
  const digest = "sha512";

  const buffer = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
  const hash = buffer.toString(`hex`);

  return hash;
}

const hash = generatePassword(password);

console.log("hash: ", hash);

// Exemplo de hash como string randômico
const uuid = crypto.randomUUID();
console.log("uuid", uuid);
