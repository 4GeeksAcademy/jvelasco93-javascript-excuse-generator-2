const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function getRandomElement(anArray) {
  return anArray[Math.floor(Math.random() * anArray.length)];
}

function buildExcuse() {
  return `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}`;
}

export function renderExcuse() {
  const excuseElement = document.querySelector("#excuse");
  if (!excuseElement) {
    throw new Error(`Element with id "excuse" was not found`)
  }

  excuseElement.textContent = buildExcuse()
}