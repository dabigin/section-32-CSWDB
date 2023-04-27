const jokes = require("give-me-a-joke");
const colors = require("colors");
// To get a random dad joke
//332 Installing Packages Jokes and Rainbow
jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
