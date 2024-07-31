// cypher.js
const vigenereEncrypt = (plainText, key) => {
  key = key.toUpperCase();
  let keyLength = key.length;
  let encryptedText = '';

  for (let i = 0; i < plainText.length; i++) {
      let char = plainText[i];

      if (/[a-zA-Z]/.test(char)) {
          let shift = key.charCodeAt(i % keyLength) - 'A'.charCodeAt(0);

          if (/[A-Z]/.test(char)) {
              encryptedText += String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26 + 'A'.charCodeAt(0));
          } else {
              encryptedText += String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26 + 'a'.charCodeAt(0));
          }
      } else {
          encryptedText += char;
      }
  }

  return encryptedText;
};

function vigenereDecrypt(encryptedText, key) {
  key = key.toUpperCase();
  let keyLength = key.length;
  let decryptedText = '';

  for (let i = 0; i < encryptedText.length; i++) {
      let char = encryptedText[i];

      if (/[a-zA-Z]/.test(char)) {
          let shift = key.charCodeAt(i % keyLength) - 'A'.charCodeAt(0);

          if (/[A-Z]/.test(char)) {
              decryptedText += String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26 + 'A'.charCodeAt(0));
          } else {
              decryptedText += String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) - shift + 26) % 26 + 'a'.charCodeAt(0));
          }
      } else {
          decryptedText += char;
      }
  }

  return decryptedText;
}

let plainText = process.argv[2];
let key = process.argv[3];

if (!plainText || !key) {
  plainText = "Isso é um teste para a avaliação de ASSI6"
  key = "TESTE"
  // console.log("Usage: node cypher.js \"plain text\" \"KEY\"");
  // process.exit(1);
}

const encryptedText = vigenereEncrypt(plainText, key);
const decryptedText = vigenereDecrypt(encryptedText, key);

console.log(`Texto original: ${plainText}`);
console.log(`Texto criptografado: ${encryptedText}`);
console.log(`Texto descriptografado: ${decryptedText}`);