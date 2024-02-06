const randomPlay = () => {
    // should return a random option between rock, paper and scissors
    let random_selection = "";
    switch (Math.floor(Math.random() * 12)) {
        case 0:
        case 1:
        case 2:
        case 3:
            random_selection = "rock";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            random_selection = "paper";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
            random_selection = "scissors";
            break;
    }
    return random_selection
}

const playRound = (playerSelection, computerSelection) => {
    // logic of the game goes here
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    // returns string declaring winner of the round
    // returns draw if the player and computer choose the same sign
}

const validateSelection = (playerSelection) => {
    // returns true or false indicating if the player selection from prompt is valid
    return true;
}

const game = () => {
    // does a playthrough of the game with 5 rounds
    let player_wins = 0;
    let computer_wins = 0;
    let player_selection = "";

    for (let i = 0; i < 5; i++) {
        let computer_selection = randomPlay();
        player_selection = prompt("Rock, Paper or Scissors?");
        while (!validateSelection(player_selection)) {
            alert("Haven't you played this game before? Your only options are Rock, Paper or Scissors!");
            player_selection = prompt("Rock, Paper or Scissors?");
            // prompt returns an empty string if no input is given (player_selection == "")
            // prompt returns null if cancel is selected or the page is reloaded (player_selection == null) 
        }
        let round_winner = playRound(player_selection, computer_selection);
        if (round_winner === "draw") continue;
        else round_winner === "player" ? player_wins++ : computer_wins++;
    }
    let game_announcement = "";
    if (player_wins === computer_wins) game_announcement = "It's a draw!";
    else player_wins > computer_wins ? game_announcement = "Congratulations, Player is the winner!" : game_announcement = "Too bad... Computer wins, seems like the robots are taking over...";
    console.log(game_announcement);
}

const main = () => {
    // We could ask for the user's name instead of just displaying player for better UX
    game();
    while (confirm("Want to try your luck again?") == true) {
        game();
    }
    alert("Hope you had fun!");
    // after the game, should ask the player if they want to play again
}


main();
