import DragCard from "/img/drag-cards.png";
import TicTac from "/img/tic-tac-toe.png";
import Clock from "/img/clock.png";
import HangMan from "/img/hang-man.png";
import PacMan from "/img/pac-man.png";
import StonePaperScissor from "/img/stone-paper-scissor.png";
import Snake from "/img/snake-game.png";

/*
Template 

  {
    projectName: "",
    projectDate: "",
    url: "",
    craftedWith: ["", "", ""],
    projectImg: ,
    description: "",
  },

*/

const projectData = [
  {
    projectName: "Drag cards",
    projectDate: "Jan 2024",
    url: "https://draggable-cards-subhendu.netlify.app/",
    craftedWith: ["react", "tailwind", "framer motion"],
    projectImg: DragCard,
    description:
      "Welcome to our website featuring draggable cards, crafted with React, Tailwind, and Framer Motion. Effortlessly drag cards across the screen with smooth animations for a delightful user experience. Explore the fusion of cutting-edge technologies, showcasing creativity and engagement in a sleek, responsive design. Welcome to the future of web design!",
  },
  {
    projectName: "Pac Man 0.11",
    projectDate: "Dec 2023",
    url: "https://pac-man-game-subhendu.netlify.app/",
    craftedWith: ["html", "css", "javascript"],
    projectImg: PacMan,
    description:
      "Welcome to the iconic arcade classic, Pac-Man, brought to life in your browser through HTML, CSS, and JavaScript. Get ready to embark on a thrilling journey through the maze as you guide Pac-Man, the iconic yellow character, through a labyrinth filled with pellets, power-ups, and pesky ghosts. With its vibrant visuals, nostalgic sound effects, and responsive controls, this digital adaptation faithfully recreates the magic of the original game. Devour pellets to clear the maze while avoiding the relentless pursuit of the colorful ghosts. But beware, grab a power pellet to turn the tables and chase down those elusive ghosts for extra points! Whether you're a seasoned Pac-Man veteran or a newcomer to the world of retro gaming, this HTML, CSS, and JavaScript-powered Pac-Man game offers endless hours of fun and excitement for players of all ages. So, grab your power pellets and get ready to chomp your way to victory",
  },
  {
    projectName: "Snake Game",
    projectDate: "Dec 2023",
    url: "https://snake-game-subhendu.netlify.app/",
    craftedWith: ["html", "css", "Javascript"],
    projectImg: Snake,
    description:
      "Welcome to the classic Snake game, reimagined and crafted with HTML, CSS, and JavaScript. Prepare to embark on a nostalgic journey as you guide the snake through the grid, devouring food to grow longer while avoiding collisions with walls and its own tail. With intuitive controls and dynamic visuals, the game offers a captivating experience for players of all ages. Enjoy seamless gameplay and challenge yourself to achieve the highest score as you navigate through increasingly challenging levels. Immerse yourself in the simplicity and excitement of Snake, brought to life with modern web technologies. Are you ready to slither and snack your way to victory? Let the adventure begin!",
  },
  {
    projectName: "hang man 1",
    projectDate: "Nov 2023",
    url: "https://hang-man-game-subhendu.netlify.app/",
    craftedWith: ["html", "css", "javascript"],
    projectImg: HangMan,
    description:
      "Welcome to the classic word-guessing game, Hangman, meticulously crafted with HTML, CSS, and JavaScript. Prepare for an engaging challenge as you try to decipher the hidden word letter by letter before the stick figure meets his fate. With its intuitive interface and visually appealing design, this digital rendition of Hangman promises hours of entertainment for players of all skill levels. Test your vocabulary and strategic thinking as you make guesses, with each correct letter bringing you closer to victory and each incorrect guess inching the hangman closer to doom. From solo play to friendly competitions, this HTML, CSS, and JavaScript-powered Hangman game offers a nostalgic yet refreshing experience for all. Are you ready to outwit the gallows and emerge victorious? Let the guessing games begin!",
  },
  {
    projectName: "tic tac toe 1",
    projectDate: "Nov 2023",
    url: "https://tic-tac-toe-subhendu.netlify.app/",
    craftedWith: ["html", "css", "javascript"],
    projectImg: TicTac,
    description:
      "Welcome to Tic Tac Toe, a classic game crafted with HTML, CSS, and JavaScript. This digital adaptation offers a sleek interface designed for seamless gameplay across devices. Challenge a friend to a thrilling Player Versus Player match and enjoy dynamic visual feedback as you strategize your way to victory. With customizable settings and optional sound effects, Tic Tac Toe guarantees endless entertainment for players of all ages and skill levels. Whether you're aiming for a quick match or a series of intense battles, dive into the world of Tic Tac Toe and let the fun begin!",
  },
  {
    projectName: "analog clk",
    projectDate: "Oct 2023",
    url: "https://analog-clock-subh.netlify.app",
    craftedWith: ["html", "css", "javascript"],
    projectImg: Clock,
    description:
      "Welcome to our elegant analog clock, meticulously crafted with HTML, CSS, and JavaScript. Immerse yourself in the timeless beauty of traditional timekeeping as the hands gracefully sweep across the clock face. With its sleek design and smooth animation, this digital timepiece offers a charming addition to any website or application. Watch as the hour, minute, and second hands move in perfect harmony, accurately reflecting the passage of time. Whether you're checking the time or simply admiring its craftsmanship, our analog clock provides a captivating and functional display. Enjoy the classic charm of analog timekeeping in a modern digital format, brought to life with HTML, CSS, and JavaScript.",
  },
  {
    projectName: "stone paper",
    projectDate: "Oct 2023",
    url: "https://stone-paper-scissor-subh.netlify.app/",
    craftedWith: ["html", "css", "javascript"],
    projectImg: StonePaperScissor,
    description:
      "Welcome to the thrilling game of Rock, Paper, Scissors, brought to life through the magic of HTML, CSS, and JavaScript. Get ready to engage in a battle of wits and strategy as you face off against the computer in this timeless contest. With its sleek design and intuitive interface, our digital rendition of Rock, Paper, Scissors provides an immersive and enjoyable gaming experience for players of all ages. Simply make your choice by clicking on the corresponding icon—rock, paper, or scissors—and watch as the computer selects its move. Will you emerge victorious with clever tactics, or will the computer outsmart you? With dynamic animations and responsive gameplay, every match is a thrilling adventure. So, sharpen your instincts and prepare for a showdown in this HTML, CSS, and JavaScript-powered game of Rock, Paper, Scissors!",
  },
];

export default projectData;
