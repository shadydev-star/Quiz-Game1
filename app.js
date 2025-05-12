const questions = [
  // Original Questions
  {
    que: "Who is the GOAT of football ?",
    a: "Cristiano Ronaldo",
    b: "Lionel Messi",
    c: "Neymar Jr",
    d: "Robert Lewandowski",
    correct: "a",
  },
  {
    que: "Who is the GOAT of Nigerian music currently ?",
    a: "Davido",
    b: "Wizkid",
    c: "Burna Boy",
    d: "Seyi Vibes",
    correct: "b",
  },
  {
    que: "Who is the greatest rapper of all time ?",
    a: "Lil Wayne",
    b: "DaBaby",
    c: "Jay Z",
    d: "Eminem",
    correct: "d",
  },
  {
    que: "Who is the GOAT of basketball ?",
    a: "Michael Jordan",
    b: "LeBron James",
    c: "John D",
    d: "Alex Gimmick",
    correct: "b",
  },
  {
    que: "Who is the greatest female artiste ?",
    a: "Beyoncé",
    b: "Cardi B",
    c: "Adele",
    d: "Nicki Minaj",
    correct: "b",
  },
  {
    que: "Which country has won the most FIFA World Cups?",
    a: "Germany",
    b: "Argentina",
    c: "Brazil",
    d: "France",
    correct: "c",
  },
  {
    que: "Which artist has the most Grammy Awards?",
    a: "Beyoncé",
    b: "Michael Jackson",
    c: "Jay-Z",
    d: "Adele",
    correct: "a",
  },
  {
    que: "Which team won the NBA Championship in 2023?",
    a: "Miami Heat",
    b: "Golden State Warriors",
    c: "Los Angeles Lakers",
    d: "Denver Nuggets",
    correct: "d",
  },
  {
    que: "Who is known as the 'Queen of Pop'?",
    a: "Rihanna",
    b: "Lady Gaga",
    c: "Madonna",
    d: "Katy Perry",
    correct: "c",
  },
  {
    que: "Who holds the record for the most goals in international football?",
    a: "Cristiano Ronaldo",
    b: "Lionel Messi",
    c: "Ali Daei",
    d: "Pelé",
    correct: "a",
  },
  {
    que: "Which rapper is also known as 'Slim Shady'?",
    a: "Dr. Dre",
    b: "Kendrick Lamar",
    c: "Eminem",
    d: "Nas",
    correct: "c",
  },
  {
    que: "Who won the Ballon d'Or in 2023?",
    a: "Kylian Mbappé",
    b: "Lionel Messi",
    c: "Erling Haaland",
    d: "Kevin De Bruyne",
    correct: "b",
  },
  {
    que: "Which female artist released the album '21'?",
    a: "Adele",
    b: "Taylor Swift",
    c: "Dua Lipa",
    d: "Billie Eilish",
    correct: "a",
  },
  {
    que: "Which tennis player has won the most Grand Slam titles?",
    a: "Roger Federer",
    b: "Rafael Nadal",
    c: "Novak Djokovic",
    d: "Pete Sampras",
    correct: "c",
  },
  {
    que: "Who sang the global hit song 'Blinding Lights'?",
    a: "The Weeknd",
    b: "Drake",
    c: "Post Malone",
    d: "Travis Scott",
    correct: "a",
  },
  {
    que: "Which country hosted the 2022 FIFA World Cup?",
    a: "Qatar",
    b: "USA",
    c: "Russia",
    d: "Brazil",
    correct: "a",
  },
  {
    que: "Who is the most streamed artist on Spotify as of 2024?",
    a: "Taylor Swift",
    b: "Drake",
    c: "Bad Bunny",
    d: "The Weeknd",
    correct: "d",
  },
  {
    que: "Which athlete is nicknamed 'The Flash'?",
    a: "Usain Bolt",
    b: "Tyson Gay",
    c: "Mo Farah",
    d: "Michael Phelps",
    correct: "a",
  },
  {
    que: "Which singer's real name is Stefani Germanotta?",
    a: "Lady Gaga",
    b: "Halsey",
    c: "Doja Cat",
    d: "Billie Eilish",
    correct: "a",
  },
  {
    que: "Which NBA player is known as 'The Greek Freak'?",
    a: "Joel Embiid",
    b: "Giannis Antetokounmpo",
    c: "Nikola Jokic",
    d: "Luka Dončić",
    correct: "b",
  },

  // New Questions
  {
    que: "Who holds the record for the most goals in the NBA?",
    a: "Kareem Abdul-Jabbar",
    b: "LeBron James",
    c: "Michael Jordan",
    d: "Kobe Bryant",
    correct: "a",
  },
  {
    que: "Which country won the 2018 FIFA World Cup?",
    a: "France",
    b: "Croatia",
    c: "Brazil",
    d: "Germany",
    correct: "a",
  },
  {
    que: "Who is known as the fastest man in the world?",
    a: "Tyson Gay",
    b: "Usain Bolt",
    c: "Michael Johnson",
    d: "Carl Lewis",
    correct: "b",
  },
  {
    que: "Which country has the most Olympic gold medals in history?",
    a: "USA",
    b: "Russia",
    c: "China",
    d: "Germany",
    correct: "a",
  },
  {
    que: "Who won the NBA MVP in 2021?",
    a: "LeBron James",
    b: "Giannis Antetokounmpo",
    c: "Nikola Jokic",
    d: "Stephen Curry",
    correct: "c",
  },
  {
    que: "Who is considered the greatest boxer of all time?",
    a: "Mike Tyson",
    b: "Floyd Mayweather",
    c: "Muhammad Ali",
    d: "Manny Pacquiao",
    correct: "c",
  },
  {
    que: "Which country has the most World Cup appearances?",
    a: "Brazil",
    b: "Germany",
    c: "Italy",
    d: "Argentina",
    correct: "b",
  },
  {
    que: "Who won the 2020 UEFA Champions League?",
    a: "Liverpool",
    b: "Barcelona",
    c: "Bayern Munich",
    d: "Paris Saint-Germain",
    correct: "c",
  },
  {
    que: "Which player has won the most Wimbledon titles in tennis?",
    a: "Roger Federer",
    b: "Rafael Nadal",
    c: "Novak Djokovic",
    d: "Pete Sampras",
    correct: "a",
  },
  {
    que: "Which team won the 2021 Super Bowl?",
    a: "Kansas City Chiefs",
    b: "Tampa Bay Buccaneers",
    c: "San Francisco 49ers",
    d: "Green Bay Packers",
    correct: "b",
  },
  {
    que: "Which artist is known for the hit song 'Shape of You'?",
    a: "Ed Sheeran",
    b: "Justin Bieber",
    c: "Taylor Swift",
    d: "Bruno Mars",
    correct: "a",
  },
  {
    que: "Which artist's real name is Stefani Joanne Angelina Germanotta?",
    a: "Ariana Grande",
    b: "Lady Gaga",
    c: "Katy Perry",
    d: "Billie Eilish",
    correct: "b",
  },
  {
    que: "Who is the best-selling female artist of all time?",
    a: "Whitney Houston",
    b: "Madonna",
    c: "Beyoncé",
    d: "Mariah Carey",
    correct: "d",
  },
  {
    que: "Which song did Michael Jackson famously perform at the 1983 Motown 25 special?",
    a: "Billie Jean",
    b: "Thriller",
    c: "Beat It",
    d: "Smooth Criminal",
    correct: "a",
  },
  {
    que: "Which artist released the album 'Lover' in 2019?",
    a: "Dua Lipa",
    b: "Ariana Grande",
    c: "Ed Sheeran",
    d: "Taylor Swift",
    correct: "d",
  },
  {
    que: "Who is known as the 'King of Pop'?",
    a: "Michael Jackson",
    b: "Elvis Presley",
    c: "Justin Timberlake",
    d: "Prince",
    correct: "a",
  },
  {
    que: "Which band is known for songs like 'Bohemian Rhapsody' and 'We Will Rock You'?",
    a: "The Beatles",
    b: "Queen",
    c: "Led Zeppelin",
    d: "Pink Floyd",
    correct: "b",
  },
  {
    que: "Who is known as the 'Queen of Soul'?",
    a: "Aretha Franklin",
    b: "Diana Ross",
    c: "Etta James",
    d: "Janis Joplin",
    correct: "a",
  },
  {
    que: "Which artist released the album 'Future Nostalgia' in 2020?",
    a: "Dua Lipa",
    b: "Billie Eilish",
    c: "Lizzo",
    d: "Ariana Grande",
    correct: "a",
  },
  {
    que: "Who was the first woman to be inducted into the Rock and Roll Hall of Fame?",
    a: "Madonna",
    b: "Aretha Franklin",
    c: "Janis Joplin",
    d: "Tina Turner",
    correct: "b",
  },
  {
    que: "Which band released the hit song 'Smells Like Teen Spirit'?",
    a: "Green Day",
    b: "Nirvana",
    c: "Pearl Jam",
    d: "Soundgarden",
    correct: "b",
  },
  {
    que: "Who was the lead vocalist of the legendary rock band Queen?",
    a: "Mick Jagger",
    b: "Freddie Mercury",
    c: "David Bowie",
    d: "Steven Tyler",
    correct: "b",
  },
  {
    que: "Who is known for the hit song 'Old Town Road'?",
    a: "Lil Nas X",
    b: "Drake",
    c: "Kendrick Lamar",
    d: "Travis Scott",
    correct: "a",
  },
  {
    que: "Which band released the iconic album 'Abbey Road'?",
    a: "The Rolling Stones",
    b: "The Beatles",
    c: "The Beach Boys",
    d: "The Who",
    correct: "b",
  },
  {
    que: "Who was the first artist to reach 1 billion streams on Spotify?",
    a: "Ed Sheeran",
    b: "Drake",
    c: "Ariana Grande",
    d: "Taylor Swift",
    correct: "b",
  },
  {
    que: "Which artist released the song 'Uptown Funk' in 2014?",
    a: "Bruno Mars",
    b: "Justin Timberlake",
    c: "Pharrell Williams",
    d: "Pitbull",
    correct: "a",
  },
  {
    que: "Who is the best-selling male artist of all time?",
    a: "Elvis Presley",
    b: "Michael Jackson",
    c: "Frank Sinatra",
    d: "The Weeknd",
    correct: "a",
  },
  {
    que: "Which artist is known for the hit song 'Bad Guy'?",
    a: "Billie Eilish",
    b: "Dua Lipa",
    c: "Ariana Grande",
    d: "Selena Gomez",
    correct: "a",
  },
  {
    que: "Who is the lead singer of the band Coldplay?",
    a: "Chris Martin",
    b: "Bono",
    c: "Adam Levine",
    d: "Brandon Flowers",
    correct: "a",
  },
  {
    que: "Which artist is known for the song 'Rolling in the Deep'?",
    a: "Adele",
    b: "Taylor Swift",
    c: "Beyoncé",
    d: "Rihanna",
    correct: "a",

  }
];


let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
let userAnswers = [];

// Check if there's saved state in localStorage
if (localStorage.getItem("quizState")) {
  const savedState = JSON.parse(localStorage.getItem("quizState"));
  index = savedState.index;
  right = savedState.right;
  wrong = savedState.wrong;
  userAnswers = savedState.userAnswers;
}

// Music playlist
const playlist = [
  "freemp3.plus-Ed Sheeran - South of the Border (feat. Camila Cabello -192.mp3",
  "freemp3.plus-Eminem - Not Afraid-192.mp3",
  "freemp3.plus-Halsey - Without Me (Lyrics)-192.mp3",
  "freemp3.plus-Imagine Dragons - Bones (Lyrics)-192.mp3",
  "freemp3.plus-MACKLEMORE -192.mp3",
  "freemp3.plus-Maroon 5 - Cold (Lyrics) ft. Future-128.mp3",
  "freemp3.plus-Maroon 5 - One More Night (Lyric Video)-192.mp3",
  "freemp3.plus-Moves Like Jagger - Maroon 5 (Feat. Christina Aguilera) (Lyrics) 🎵-192.mp3",
  "freemp3.plus-Shawn Mendes - Something Big (Lyrics)-192.mp3",
  "freemp3.plus-Shawn Mendes - Stitches (Lyrics)-192.mp3",
];

// Shuffle playlist function
const shufflePlaylist = (array) => {
  let currentIndex = array.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

// Get the audio element
const audio = new Audio();
let shuffledPlaylist = shufflePlaylist([...playlist]);

// Function to play the next song in the shuffled playlist
const playNextSong = () => {
  const nextSong = shuffledPlaylist.pop();
  shuffledPlaylist.unshift(nextSong); // Move the song to the front
  audio.src = nextSong;
  audio.play();
};

// Start playing the first song when the user starts the quiz
const startQuiz = () => {
  // Play music when quiz starts
  audio.autoplay = true;
  audio.addEventListener("ended", playNextSong);
  playNextSong();
  
  // Start the quiz
  getAnswers();

};



// Save quiz state to localStorage
const saveState = () => {
  const state = {
    index,
    right,
    wrong,
    userAnswers,
  };
  localStorage.setItem("quizState", JSON.stringify(state));
};

// Quiz logic
const question = document.querySelector("#quiz");
const answerInput = document.querySelectorAll(".answers");

const getAnswers = () => {
  if (index === total) {
    return endQuiz();
  }

  reset();

  const data = questions[index];
  question.innerText = `0${index + 1}) ${data.que}`;

  answerInput[0].nextElementSibling.innerText = data.a;
  answerInput[1].nextElementSibling.innerText = data.b;
  answerInput[2].nextElementSibling.innerText = data.c;
  answerInput[3].nextElementSibling.innerText = data.d;
};

let submitQuiz = () => {
  const data = questions[index];
  const ans = matchAns();

  if (!ans) {
    alert("Please select an answer!");
    return;
  }

  userAnswers.push(ans);

  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;

  // Save state after every answer
  saveState();

   // Start playing music when the user submits their answer
   audio.autoplay = true;
   audio.addEventListener("ended", playNextSong);
   playNextSong();

  getAnswers();
};

const matchAns = () => {
  let answer;
  answerInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const endQuiz = () => {
  let resultHTML = `
    <h3 class='thanks'>Thanks for playing the quiz!</h3>
    <span class='score'>You scored ${right} / ${total}</span>
    <hr>
    <h4>Review:</h4>
    <table class="quiz-result-table">
      <thead>
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
  `;

  questions.forEach((q, i) => {
    const correctAnswer = q[q.correct];
    const userAnswerKey = userAnswers[i];
    const userAnswer = userAnswerKey ? q[userAnswerKey] : "No answer";
    const isCorrect = q.correct === userAnswerKey;
    const resultText = isCorrect ? "Correct" : "Incorrect";
    const resultClass = isCorrect ? "correct" : "incorrect";
    const icon = isCorrect ? "✔️" : "❌";

    resultHTML += `
      <tr>
        <td>Q${i + 1}: ${q.que}</td>
        <td>${userAnswer} ${icon}</td>
        <td>${correctAnswer}</td>
        <td class="${resultClass}">${resultText}</td>
      </tr>
    `;
  });

  resultHTML += `
      </tbody>
    </table>
    <br>
    <a href="" onclick="restartQuiz()">Play Again</a>
  `;
  document.getElementById("box").innerHTML = resultHTML;
};


const reset = () => {
  answerInput.forEach((input) => {
    input.checked = false;
  });
};

// Restart the quiz from the beginning
const restartQuiz = () => {
  localStorage.removeItem("quizState");
  index = 0;
  right = 0;
  wrong = 0;
  userAnswers = [];
  startQuiz();
};

// Start the quiz when the page is loaded
startQuiz();
