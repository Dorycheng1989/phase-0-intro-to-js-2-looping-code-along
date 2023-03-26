// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  };

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const giftsList = [];

function writeCards (names, Birthday) {
    for (let i = 0; i < names.length; i++) {
        giftsList.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    };
        return giftsList
};
function countDown (){
let countDown = 10;
while (countDown >= 0 ) {
    countDown--;
    console.log (countDown);
}
};