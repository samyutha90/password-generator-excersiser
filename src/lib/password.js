function shuffle(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getrandomChar(text) {
  return text[Math.floor(Math.random() * text.length)];
}

export function generatedPwd(config) {
  let result = "";
  let charToSkip = 1;
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBER = "0123456789";
  const SPECIALS = "!@#$%^&*()-_=+[]{};:'\",.<>/?\\";
  let alphabets = LOWERCASE;
  result += getrandomChar(LOWERCASE);

  if (config.uppercase) {
    alphabets += UPPERCASE;
    result += getrandomChar(UPPERCASE);
    charToSkip++;
  }
  if (config.number) {
    alphabets += NUMBER;
    result += getrandomChar(NUMBER);
    charToSkip++;
  }
  if (config.specials) {
    alphabets += SPECIALS;
    result += getrandomChar(SPECIALS);
    charToSkip++;
  }

  for (let i = charToSkip; i < Number(config.size); i++) {
    result += getrandomChar(alphabets);
  }

  console.log("****", result);
  return shuffle(result).join("");
}
