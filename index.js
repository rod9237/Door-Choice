const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function playGame() {
  const prizeDoor = getRandomInt(3);
  console.log('Перед вами три двери. За одной из них - приз!');
  rl.question('Выберите дверь (1, 2 или 3): ', (choice) => {
    const chosenDoor = parseInt(choice) - 1;
    if (chosenDoor === prizeDoor) {
      console.log('Поздравляем! Вы нашли приз за дверью номер ' + (prizeDoor + 1) + '!');
    } else {
      console.log('К сожалению, за дверью номер ' + (prizeDoor + 1) + ' был приз. Попробуйте еще раз.');
    }
    rl.close();
  });
}

playGame();
