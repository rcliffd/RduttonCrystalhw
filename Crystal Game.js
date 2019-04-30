var randomNum = $('#randNum'); // Random Number
var totalCount = 0; // Total Count
var wins = 0; // State of Wins
var lose = 0; // State of Losses 

// *********************** RNG For the Gems ************************ // 

    var gemOne = $('#one'); // First Gem
    var gemTwo = $('#two'); // Second Gem
    var gemThree = $('#three'); // Thrid Gem
    var gemFour = $('#four'); // Fourth Gem


    gemOne = Math.floor(Math.random() * 10 + 2) // RNG for Gem 1
    gemTwo = Math.floor(Math.random() * 10 + 2) // RNG for Gen 2
    gemThree = Math.floor(Math.random() * 10 + 2) // RNG for Gen 3
    gemFour = Math.floor(Math.random() * 10 + 2) // RNG for Gen 4


// ************** Random Number Generator To Win **********// 

randomNum = Math.floor(Math.random() * 100) + 1; // Random Number Generator

console.log('randNum is ' + randomNum) // Checking Random Number Gen

$('#randNum').append(randomNum); // print number to DOM
    


// *********************** Win Lose Logic ************************ // 

$('#wins').text(wins); // adding text to DOM for Wins

$('#lose').text(lose); // adding text to DOM for Losses

function winner(){ // Win Conition

    wins++;  // Wins = wins + 1
    $('#wins').text(wins); // print wins to DOM
    reset(); //reset function

}

function losser(){ // lose function

    lose++; // lose = lose + 1
    $('#lose').text(lose); // print lose to DOM
    reset(); // reset function

}

function reset() { // reset Function 

    gemOne = Math.floor(Math.random() * 10 + 2) //RNG for gem 1 
    gemTwo = Math.floor(Math.random() * 10 + 2) //RNG for gem 2
    gemThree = Math.floor(Math.random() * 10 + 2) //RNG for gem 3
    gemFour = Math.floor(Math.random() * 10 + 2) //RNG for gem 4

    totalCount = 0; //reset totalCount
    $('#userScore').text(totalCount); //reprint totalCount
    
}


// *********************** Game Loop ************************ // 

$('#one').on('click', function(){ // gem 1 event handler 

    totalCount = totalCount + gemOne; //current totalCount == totalCount + value of gem 1

    console.log('New Score ' + totalCount); // checking current score

        $('#userScore').text(totalCount); // print totalCount To the DOM 

            if(totalCount === randomNum){ // HOW TO Win
                winner(); //Run Win factor 

            } else if (totalCount > randomNum) { // HOW TO Lose
                losser(); // Run lose factor
            }
});

$('#two').on('click', function(){ // gem 2 function

    totalCount = totalCount + gemTwo; //current totalCount == totalCount + value of gem 2

    console.log('New Score ' + totalCount); // checking current score

        $('#userScore').text(totalCount); // printing current score to the DOM

            if(totalCount === randomNum){ // HOW TO Win
                winner(); // Win factor

            } else if (totalCount > randomNum) { // HOW TO lose 
                losser(); // lose factor
            }
});

$('#three').on('click', function(){ // gem 3 function 

    totalCount = totalCount + gemThree; // current totalCount == totalCount + value of gem 3

    console.log('New Score ' + totalCount); // check current value of totalCount

        $('#userScore').text(totalCount); // print total count to DOM

            if(totalCount === randomNum){ // HOW TO Win
                winner(); // Win Factor 

            } else if (totalCount > randomNum) { // HOW TO Lose
                losser(); // Lose factor
            }
});

$('#four').on('click', function(){ //gem 4 function

    totalCount = totalCount + gemFour; //current totalCount == totalCount + value of gem 4

    console.log('New Score ' + totalCount); // checking currrent status of totalCount

        $('#userScore').text(totalCount); //printing totalCount to the DOM

            if(totalCount === randomNum){ // HOW TO Win
                winner(); // Win Factor

            } else if (totalCount > randomNum) { // HOW TO Lose
                losser(); // Lose Factor
            }
});