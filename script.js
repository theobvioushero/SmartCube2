// Script to initialize and manage the cubing.js viewer

document.addEventListener("DOMContentLoaded", () => {
  const cubeElement = document.getElementById("cube-container");

  // Initialize the twisty player
  const twistyPlayer = new cubing.twisty.TwistyPlayer({
    puzzle: "3x3x3"
  });

  cubeElement.appendChild(twistyPlayer);

  // Example scramble (You will replace this with actual data from your cube)
  twistyPlayer.experimentalSetAlg("R U R' U'");
});
