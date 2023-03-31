// Created object with random answers

const randomAnswer = {
    randomClub: ['Arsenal', 'Chelsea', 'Manchester Utd', 'Liverpool', 'Manchester City', 'West Ham', 'Tottenham', 'Aston Villa', 'Burnley', 'BlackBurn', 'Watford', 'Wolves', 'Real Madrid', 'Barcelona', 'Juventus', "PSG", 'Bayern Munich','Borussia Dortmund', 'Napoli', 'AC Milan'],
    randomScorer: ['Cristiano Ronaldo', 'Lionel Messi', 'Didier Drogba', 'Robert Lewandowski', "Karim Benzema", 'Kylian Mbappe', 'John Terry', 'David Beckham', 'Thierry Henry', 'Zidane', 'Pele', 'Maradonna', 'Erling Haaland', 'Peter Crouch', 'Wayne Rooney', 'Joe Hart', 'Mohammed Salah', 'Harry Maquire', 'James Milner', 'David De Gea'],
    }

/*    Below is just a method of counting how many properties are within randomClub and randomScorer

let clubCount = randomAnswer.randomClub.length;
console.log(clubCount);    
let scorerCount = randomAnswer.randomScorer.length;
console.log(scorerCount);
*/


// Created two variables outside of the object for trophies and retirement age.
let numberOfTrophies = Math.floor(Math.random() * 50); // This will generate a random whole number between 0-50
let retireAge = Math.floor(Math.random() * 22 ) +22 ;  // This will generate a random whole number between 22-45

// Created a function which will then be called later on to displat the message.
const randomMessage = () => {
    let Club = Math.floor(Math.random() * randomAnswer.randomClub.length) ;
    let yourClub = randomAnswer.randomClub[Club];                         // This selects a random club from randomClub

    let scorer = Math.floor(Math.random() * randomAnswer.randomScorer.length);
    let yourGoals = randomAnswer.randomScorer[scorer];                    // This selects a random scorer from randomScorer

    return `You will be a professional footballer. You will play for ${yourClub}, during your playing career you will score more goals then ${yourGoals}.
    With your team you will go on to win ${numberOfTrophies} trophies. Footballing careers don't last forever though and you will retire from the sport at ${retireAge} years old.`;

    // Above is now the message that will be returned when the function is called upon.
    // Within the message variables are inserted that are assigned to the different methods we used to call random words or numbers.
}
  
   console.log(randomMessage());  // This now calls the function and will display the message inside but each time it's called it will be randomised.
   


   /* This method can also be done without the use of objects and just using variables as shown below:

   const randomClub = ['A', 'B', 'C','D']
const goalScorer = ['W', 'X', 'Y', 'Z'];
const trophiesWon = Math.floor(Math.random() * 50);
const retireAge = Math.floor(Math.random() * 22 ) + 22; 

   const randomMessage = () => {
    let footballClub = Math.floor(Math.random() * randomClub.length)
    let club = randomClub[footballClub];

    let randomScorer = Math.floor(Math.random() * goalScorer.length)
    let scorer = goalScorer[randomScorer];

    return `You will play for ${club} and score more goals than ${scorer}. You will win ${trophiesWon} trophies and retire at ${retireAge} years old.`
   }

   console.log(randomMessage())
   */
