// Sample game data in JSON format
var games = [
    {
      "id": 1,
      "title": "Game 1",
      "image": "game1.jpg",
      "description": "Description of Game 1.",
      "url": "game1.html"
    },
    // ... (Add the remaining game entries here)
  ];
  
  // Function to generate the game HTML
  function generateGameHTML(game) {
    return `
      <div class="game">
        <img src="${game.image}" alt="${game.title}">
        <h2>${game.title}</h2>
        <p>${game.description}</p>
        <a href="${game.url}">Play ${game.title}</a>
      </div>
    `;
  }
  
  // Function to