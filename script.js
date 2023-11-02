// Wait for the DOM content to be loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Create a new twisty player
    const player = new cubing.twisty.Player();

    // Set the puzzle type to 3x3
    player.experimentalSetPuzzle(`{"type": "3x3x3"}`);

    // Add the player to the cube display div
    document.getElementById("cube-display").appendChild(player);

    // Optionally, you can set a scramble or a sequence of moves
    player.experimentalLoadAlg("R U R' U'");
});
