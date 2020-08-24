function Die(value) {
  let dieString = value;

  switch (value) {
    case 1:
      dieString = "\u2680";
      break;
    case 2:
      dieString = "\u2681";
      break;
    case 3:
      dieString = "\u2682";
      break;
    case 4:
      dieString = "\u2683";
      break;
    case 5:
      dieString = "\u2684";
      break;
    case 6:
      dieString = "\u2685";
      break;
  }
  return dieString;
}

function Roll() {
  let dieValue = 
  die(dievalue)
  return dievalue
}

function main() {
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");

  for (let i = 0; i < 10; i++) {

    let die1 =
    let die2 =

    let message = `${die1} + ${die2} == ${die1.Value + die2.Value}`;
    if (die1.Value == die2.Value) {
      message += " DOUBLES!";
    }

    console.log(message);
  }
}

main();