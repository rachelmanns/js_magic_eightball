const eightballImage = document.getElementById('eightball-image');

//MDN code snippet as reference:
//document.getElementById("myBtn").addEventListener("click", displayDate);

//variable.addEventListener("click", )



//Using a prompt, ask the the user's name and then store that name in a variable called userName
const userName = prompt("Hello seeker of wisdom, what is your name?");

//Alert to say "Hello ${userName}. I can see you have questions for me..."
alert(`Hello ${userName}. I can see you have questions for me...`);

//Prompt to ask the user for their question for the magic eightBall
//const userQuestion = prompt(`Greetings ${userName}. Ask me any yes/no question and I shall reveal your fate...`);

// EVERYTHING ABOVE IS NEW ^ //



const clickBall = () => {
//Step one, once ball clicked a prompt comes up and asks the user for their question:
prompt("Ask me a yes no question and I shall reveal your fate.")
//User clicks enter and the answer will appear in the empty p tag underneath the eightball image after all this jazzy maths:

//Generates random nnumber in between 1 and 8:
let randomNumber = Math.floor(Math.random() * 8);

//Creating a variable of an empty string for the answer to inject into:
let eightBall = "";

//Switch statement that assigns a different respone depending on the outcome of randomNumber:
switch (randomNumber) {
  case 0:
    eightBall = "It is certain.";
    break;
  case 1:
    eightBall = "It is decidedly so.";
    break;
  case 2: 
    eightBall = "Reply hazy try again...";
    break;
  case 3:
    eightBall = "Cannot predict now, ask me another question.";
    break;
  case 4:
    eightBall = "Do not count on it.";
    break;
  case 5:
    eightBall = "My sources say no.";
    break;
  case 6:
    eightBall = "Outlook not so good.";
    break;
  case 7:
    eightBall = "Signs point to yes!"
    break;
}

const eightballResponse = document.getElementById('answer');

eightballResponse.innerHTML = eightBall;

};


eightballImage.addEventListener("click", clickBall)

//let userName = "Juniper";//

//userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");


//let userQuestion = "Will I get a surprise gift this weekend?";

console.log(`${userName} has asked - "${userQuestion}"`);



console.log(`The magic eightball says: "${eightBall}"`)