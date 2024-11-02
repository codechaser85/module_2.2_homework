/* const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector(".input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer); // clearing the timer
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--; // decrementing maxTime by -1
            return timeText.innerText = maxTime;
        }
        alert(`Time's up! ${correctWord.toUpperCase()} was the correct word`);
        initGame(); // calling initGame function, so the game can start again
    }, 1000);
}

const initGame = () => {
    initTimer(30); // calling initTimer function with 30 seconds as maxTime value
    let randomObj = word[Math.floor(Math.random() * words.length)];// getting random object from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // getting random number
        // shuffling and swiping wordArray[i] with wordArray[j]
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // swapping the letters
    }
    wordText.innerText = wordArray.join(""); // passing the shuffled word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLowerCase(); // passing random word to correctWord
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length); // setting the max length of input field to correct word length
}
initGame(); // calling initGame function to start the game

const checkWord = () => {
    let userWord = inputField.value.trim().toLowerCase(); // getting user input and converting to lowercase
    if(!userWord) return alert('Please enter a word'); // if user input is empty is empty

    // checking if user word is equal to correct word
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);

    // if above two conditions are false then user word is correct
    alert(`Congrats! ${userWord.toUpperCase()} is correct`);
    initGame(); // calling initGame function to start the game again
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord); */

const wordText = document.querySelector(".word"), // Corrected word text selector
hintText = document.querySelector(".hint span"), // Corrected hint text selector
timeText = document.querySelector(".time b"), // Corrected time text selector
inputField = document.querySelector("input[type='text']"), // Corrected input field selector
refreshBtn = document.querySelector(".refresh-word"), // Corrected refresh button selector
checkBtn = document.querySelector(".check-word"); // Corrected check button selector

let correctWord, timer; // Corrected variable declaration

const initTimer = maxTime => {
    clearInterval(timer); // clearing the timer
    timer = setInterval(() => {
        // checking if maxTime is greater than 0
        if (maxTime > 0) {
            maxTime--; // decrementing maxTime by -1
            return timeText.innerText = maxTime; // updating time text
        }
        // if maxTime is 0 then time is up
        clearInterval(timer); // clear the timer when time is up
        alert(`Time's up! ${correctWord.toUpperCase()} was the correct word`); // showing alert with correct word
        initGame(); // calling initGame function, so the game can start again
    }, 1000);
}

const initGame = () => {
    initTimer(30); // calling initTimer function with 30 seconds as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // getting random number
        // shuffling and swiping wordArray[i] with wordArray[j]
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // swapping the letters
    }
    wordText.innerText = wordArray.join(""); // passing the shuffled word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLowerCase(); // passing random word to correctWord
    inputField.value = ""; // clearing the input field
    inputField.setAttribute("maxlength", correctWord.length); // setting the max length of input field to correct word length
}
initGame(); // calling initGame function to start the game

const checkWord = () => {
    let userWord = inputField.value.trim().toLowerCase(); // getting user input, trimming spaces, and converting to lowercase
    if (!userWord) return alert('Please enter a word'); // if user input is empty

    // checking if user word is equal to correct word
    if (userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);

    // if above two conditions are false then user word is correct
    alert(`Congrats! ${userWord.toUpperCase()} is correct`);
    initGame(); // calling initGame function to start the game again
}

refreshBtn.addEventListener("click", initGame); // adding event listener to refresh button
checkBtn.addEventListener("click", checkWord); // adding event listener to check button
