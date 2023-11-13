var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var questions = [
  {
    question : "What is the name of Harry Potter's owl? ",
    options : ["Hagrid", "Scabbers", "Dobby", "Hedwig"],
    answer : "Hedwig"
  },
  {
    question : "Which school does Harry Potter attend to learn magic? ",
    options : ["Beauxbatons Academy of Magic", "Durmstrang Institute", "Hogwarts School of Witchcraft and Wizardry", "Salem Witches' Institute"],
    answer : "Hogwarts School of Witchcraft and Wizardry"
  },
  {
    question : "What is the name of the wizarding village where Hagrid takes Harry after discovering he is a wizard? ",
    options : ["Diagon Alley", "Hogsmeade", "Little Whinging", "Godric's Hollow"],
    answer : "Diagon Alley"
  },
  {
    question : "Who is the headmaster of Hogwarts School of Witchcraft and Wizardry during most of the series? ",
    options : ["Albus Dumbledore", "Severus Snape", "Horace Slughorn", "Minerva McGonagall"],
    answer : "Albus Dumbledore"
  },
  {
    question : "What is the name of Harry's Best Friend? ",
    options : ["Draco Malfoy", "Hermione Granger", "Ron Weasley", "Luna Lovegood"],
    answer : "Ron Weasley"
  },
  {
    question : "What is the primary mode of transportation for wizards in the wizarding world? ",
    options : ["Flying broomsticks", "The Hogwarts Express", "Portkeys", "Apparition"],
    answer : "Flying broomsticks"
  },
  {
    question : "What is the name of the three-headed dog guarding the Philosopher's stone (Sorcerer's stone)? ",
    options : ["Fluffy", "Fang", "Norbert", "Crookshanks"],
    answer : "Fluffy"
  },
  {
    question : "Who is the author of the 'Fantastic Beasts and Where to Find Them?' textbook used at Hogwarts? ",
    options : ["Gilderoy Lockhart", "Rubeus Hagrid", "Newt Scamander", "Dolores Umbridge"],
    answer : "Newt Scamander"
  },
  {
    question : "Which house at Hogwarts does Harry Potter belong to? ",
    options : ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"],
    answer : "Gryffindor"
  },
  {
    question : "What is the name of the dark wizard who killed Harry's parents and left him with a lightning bolt scar on his forehead? ",
    options : ["Tom Riddle", "Bellatrix Lestrange", "Severus Snape", "Lord Voldemort"],
    answer : "Lord Voldemort"
  }];

var highscores = [
{
  name : "Cindy",
  score : 10
},
{
  name : "Disha",
  score : 9
},
{
  name : "Aldo",
  score : 8
}];

function welcome()
{
  var userName = readlineSync.question(chalk.redBright("What's your name? "));
  console.log(chalk.yellowBright("Hi " + chalk.redBright.bold(userName) + "! Welcome to HARRY POTTER Trivia!"));
  console.log(chalk.bold("------------------------------"));
}

function play(question, options, answer)
{
  console.log(chalk.blueBright(question));
  var userAnswer = readlineSync.keyInSelect(options, chalk.blueBright("Choose an option: "), {cancel: 'Skip this question'});
  if(userAnswer === -1)
  {
    console.log("Current Score : " + score);
    console.log(chalk.bold("------------------------------"));
    return;
  }
  if(options[userAnswer].toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.bgCyanBright.bold("Right :))"));
    score++;
  }
  else
  {
    console.log(chalk.bgCyanBright.bold("Wrong :(("));
  }
  console.log("Current Score : " + score);
  console.log(chalk.bold("------------------------------"));
}

function quiz()
{
  for(var i = 0; i < questions.length; i++)
  {
    play(questions[i].question, questions[i].options, questions[i].answer);
  }
}

function checkNewHighscore()
{
  for(var i = 0; i < highscores.length; i++)
  {
    if(score > highscores[i].score)
    {
      return true;
    }
  }
  return false;
}

function showScore()
{
  console.log(chalk.yellowBright("YAY! Your Final Score : ") + chalk.redBright.bold(score));
  console.log(chalk.bold("------------------------------"));
  console.log(chalk.yellowBright("The High Scores are : "));
  for(var i = 0; i < highscores.length; i++)
  {
    console.log(chalk.redBright.bold(highscores[i].name + " : " + highscores[i].score));
  }
  console.log(chalk.bold("------------------------------"));
  var check = checkNewHighscore();
  if(check)
  {
    console.log(chalk.yellowBright("CONGRATULATIONS! You have beaten a high score. Send me a screenshot to update your name in the high scores list!"));
    console.log(chalk.bold("------------------------------"));
  }
}

welcome();
quiz();
showScore();