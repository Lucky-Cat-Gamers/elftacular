
const phrases = [
  "Oh no! Well, luckily Santa's elves have unlimited lives. Let's try again!",
  "You got so close, let's try again!",
  "Keep going, we need to rescue Santa!",
  "Ouch, that looks like it hurt. I am sure you will get it next time!"
];

export default function randomPhrase() {
  const randomNumber = Math.floor(Math.random() * phrases.length);
  return phrases[randomNumber];
}
