function main() {
  console.log("Do you believe in magic?");
  console.log("------------------------");

  const allSpells = [
    {
      name: "Turn enemy into a newt",
      isEvil: true,
      energyRequired: 5.1
    },
    {
      name: "Conjure some gold for a local charity",
      isEvil: false,
      energyRequired: 2.99
    },
    {
      name: "Give a deaf person the ability to heal",
      isEvil: false,
      energyRequired: 12.2
    },
    {
      name: "Make yourself emperor of the universe",
      isEvil: true,
      energyRequired: 100.0
    },
    {
      name: "Convince your relatives your political views are correct",
      isEvil: false,
      energyRequired: 2921.5
    }
  ];

  const goodBook = [];
  const evilBook = [];

  const makeSpellBook = () => {
    allSpells.forEach(spell => {
      if (spell.isEvil == false) {
        goodBook.title = "Good Book";
        goodBook.push(spell.name);
      }
      else {
        evilBook.title = "Evil Book";
        evilBook.push(spell.name);

      }
    })

  }

  makeSpellBook(allSpells);

  const displaySpellBook = (book) => {
    console.log();
    console.log(book.title);
    for (let spell of book) {
      console.log(spell);
    }
  }
  
  displaySpellBook(goodBook);
  displaySpellBook(evilBook);

}

main();