let exit = false;

const randomPlay = () => {
  let random_selection = "";
  switch (Math.floor(Math.random() * 12)) {
    case 0:
    case 3:
    case 6:
    case 9:
      random_selection = "rock";
      break;
    case 1:
    case 4:
    case 7:
    case 10:
      random_selection = "paper";
      break;
    case 2:
    case 5:
    case 8:
    case 11:
      random_selection = "scissors";
      break;
  }
  return random_selection;
};

const log = (outcome, playerSelection, computerSelection) => {
  let message;
  if (outcome == "player") {
    message = `You chose ${playerSelection}  and the Evil AI chose ${computerSelection} \nYou won this round??? You must have cheated. `;
    alert(message);
    console.log(message);
  } else if (outcome == "computer") {
    message = `You chose ${playerSelection} and the Evil AI chose ${computerSelection} \nMwhahahahahahaha! AI wins again.`;
    alert(message);
    console.log(message);
  } else if (outcome == "draw") {
    message = `You chose ${playerSelection}  and the Evil AI chose ${computerSelection} \nA draw? How boring.`;
    alert(message);
    console.log(message);
  }
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.trim();
  playerSelection = playerSelection.toLowerCase();
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    log("player", playerSelection, computerSelection);
    return "player";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    log("computer", playerSelection, computerSelection);
    return "computer";
  } else if (playerSelection == computerSelection) {
    log("draw", playerSelection, computerSelection);
    return "draw";
  } else {
    alert("Error Error, something went wrong!");
  }
};

const getUserName = () => {
  player = prompt("Please enter your username", "Player");
  if (player == null || player == undefined || player.trim() == "")
    player = "Player";
  return player;
};

const getPlayerSelection = (i, player, player_wins, computer_wins) => {
  player_selection = prompt(
    `ROUND ${
      i + 1
    } 🔔\n${player}'s score is ${player_wins} and the Evil AI's score is ${computer_wins}. \nRock, paper, scissors, SHOOT!`
  );
  return player_selection;
};

const validateSelection = (playerSelection) => {
  if (playerSelection == null) {
    exit = true;
  }
  if (!playerSelection) {
    console.log(
      "You think you can escape? Mwahaha, there's no escaping your destiny. The game ends only with your crushing defeat or unlikely victory!"
    );
    return false;
  } else {
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection != "") {
      let regex1 = /\d/;
      if (!regex1.test(playerSelection)) {
        let regex2 = /[!@#$%^&*(),.?":{}|<>]/g;
        if (!regex2.test(playerSelection)) {
          let weapons = ["rock", "paper", "scissors"];
          if (weapons.includes(playerSelection)) {
            return true;
          } else {
            return false;
          }
        } else {
          console.log("Bro you cant use special characters in this game...");
          return false;
        }
      } else {
        console.log("Put some letters bro, don't put numbers...");
        return false;
      }
    } else {
      console.log("Please put something in there...");
      return false;
    }
  }
};

const game = () => {
  let player_wins = 0;
  let computer_wins = 0;
  let player_selection = "";
  let player = getUserName();
  if (
    confirm(
      `Welcome, ${player}, to Rock Paper Scissors! If you are new to the game click ok to read the rules. If you already know the rules click cancel to proceed with the game, and Good Luck😉🍀! `
    )
  ) {
    confirm(`A classic two-person game. Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock🪨, flat hand for paper📄, or their index and middle finger for scissors✄. But since the computer doesn't have fingers, you will use the prompt to type rock, paper or scissors.
        The rules are :
        🔴 Rock crushes scissors.
        🔴 Scissors cuts paper.
        🔴 Paper covers rock.
        🎮See who wins each round!`);
  } else exit = true;

  for (let i = 0; i < 5; i++) {
    let computer_selection = randomPlay();

    player_selection = getPlayerSelection(
      i,
      player,
      player_wins,
      computer_wins
    );

    while (!validateSelection(player_selection)) {
      if (!exit) {
        alert(
          `${player} ... Haven't you played this game before? Your only options are Rock, Paper or Scissors!`
        );
        player_selection = getPlayerSelection(
          i,
          player,
          player_wins,
          computer_wins
        );
      } else break;
    }

    if (exit) break;
    let round_winner = playRound(player_selection, computer_selection);

    round_winner === "player" ? player_wins++ : computer_wins++;
    console.log(
      `ROUND ${
        i + 1
      } ${player}'s score is ${player_wins} and the Evil AI's score is ${computer_wins}.`
    );
    if (round_winner == "draw") continue;
  }
  if (!exit) {
    let game_announcement = "";
    console.log(
      `${player} won ${player_wins} matches and the Evil AI won ${computer_wins} matches`
    );
    alert(
      `${player} won ${player_wins} matches and the Evil AI won ${computer_wins} matches`
    );
    if (player_wins === computer_wins) game_announcement = "It's a draw!";
    else
      player_wins > computer_wins
        ? (game_announcement = `Congratulations ${player}, you are the winner! There may be hope for humanity after all!`)
        : (game_announcement =
            "Too bad... The AI wins, seems like the robots are taking over...");
    console.log(game_announcement);
    alert(game_announcement);
  } else {
    console.log("The AI wins automatically since you forfeited!");
    alert(
      "You forfeited! This means you have disappointed all of humanity and the win automatically goes to the machines."
    );
  }
};

const main = () => {
  game();
  while (confirm("Want to try your luck again?") == true) {
    exit = false;
    game();
  }
  alert("Hope you had fun!");
  console.log("Hope you had fun!");
};

main();
