//This is a text adventure game made in JavaScript

//Verify the player is ready to start the game
confirm("Shall we begin?");

// Determine player age for some reason
var age = prompt("What is your age?");

if (age > 13)
{
	console.log("A fine age to play!");
}
else
{
	console.log("I'll let you play but you really should go outside or read a book or something other than being glued to your computer.");
}

//Set the initial scene for the story.
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//Check to see if user is down with the biebs
var userAnswer = prompt("Do you want to race Bieber on stage?");

//what happens?
if (userAnswer === true)
{
	console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else
{
	console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}