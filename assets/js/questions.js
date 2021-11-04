/* jshint esversion: 8 */

// Questions array
const quizQuestions = [{
    questionNum: "1",
    questionText: "What is the capital city of Hungary?",
    choices: [
      "Budapest",
      "Bratislava",
      "Timisoara",
      "Zagreb"
    ],
    correctAns: "Budapest"
  },
  {
    questionNum: "2",
    questionText: "Which major city is located on two continents?",
    choices: [
      "Dublin",
      "Jakarta",
      "Baku",
      "Istanbul"
    ],
    correctAns: "Istanbul"
  },
  {
    questionNum: "3",
    questionText: "What is the biggest city in Africa by population?",
    choices: [
      "Cape Town",
      "Lagos",
      "Windhoek",
      "Cairo"
    ],
    correctAns: "Lagos"
  },
  {
    questionNum: "4",
    questionText: "What is the world's highest continent?",
    choices: [
      "North America",
      "Africa",
      "Antartica",
      "Oceania"
    ],
    correctAns: "Antartica"
  },
  {
    questionNum: "5",
    questionText: "If you list the world's countries in alphabetical order, what is the second?",
    choices: [
      "Algeria",
      "Botswana",
      "Zambia",
      "Albania"
    ],
    correctAns: "Albania"
  },
  {
    questionNum: "6",
    questionText: "The island of Ireland has how many counties?",
    choices: [
      "28",
      "32",
      "16",
      "25"
    ],
    correctAns: "32"
  },
  {
    questionNum: "7",
    questionText: "What country has the weakest economy by GDP (2020)?",
    choices: [
      "Costa Rica",
      "East Timor",
      "Burundi",
      "South Sudan"
    ],
    correctAns: "Burundi"
  },
  {
    questionNum: "8",
    questionText: "Machu Picchu can be found in which country",
    choices: [
      "Chile",
      "Peru",
      "New Zealand",
      "Equatorial Guinea"
    ],
    correctAns: "Peru"
  },
  {
    questionNum: "9",
    questionText: "Germany has how many constituent states?",
    choices: [
      "Twenty",
      "Twelve",
      "Seven",
      "Sixteen"
    ],
    correctAns: "Sixteen"
  },
  {
    questionNum: "10",
    questionText: "The northernmost city in the world is?",
    choices: [
      "Longyearbyen",
      "Barentsburg",
      "Pyramiden",
      "Ankara"
    ],
    correctAns: "Pyramiden"
  },
  {
    questionNum: "11",
    questionText: "What percentage of the Earth's surface is covered by water?",
    choices: [
      "71%",
      "56%",
      "42%",
      "29%"
    ],
    correctAns: "71%"
  },
  {
    questionNum: "12",
    questionText: "The Grand Canyon can be found in which US state?",
    choices: [
      "Hawaii",
      "Oregon",
      "Arizona",
      "Alabama"
    ],
    correctAns: "Arizona"
  },
  {
    questionNum: "13",
    questionText: "Which two European countries does the Simplon Tunnel connect?",
    choices: [
      "Scotland and Ireland",
      "Denmark and Sweden",
      "France and Italy",
      "Switzerland and Italy"
    ],
    correctAns: "Switzerland and Italy"
  },
  {
    questionNum: "14",
    questionText: "What is the longest river in Asia?",
    choices: [
      "Yenesei",
      "Mekong",
      "Yangtze",
      "Indus"
    ],
    correctAns: "Yangtze"
  },
  {
    questionNum: "15",
    questionText: "The European Union consists of how many states?",
    choices: [
      "28",
      "27",
      "26",
      "25"
    ],
    correctAns: "27"
  },
  {
    questionNum: "16",
    questionText: "Which is the largest inland sea?",
    choices: [
      "Caspian Sea",
      "Black Sea",
      "Mediterranean Sea",
      "Dead Sea"
    ],
    correctAns: "Caspian Sea"
  },
  {
    questionNum: "17",
    questionText: " Which is the smallest independent state in the world?",
    choices: [
      "San Marino",
      "Luxembourg",
      "Andorra",
      "The Vatican"
    ],
    correctAns: "The Vatican"
  },
  {
    questionNum: "18",
    questionText: "Which range of mountains separates France from Spain?",
    choices: [
      "Alps",
      "Pyrenees",
      "Ural",
      "Mournes"
    ],
    correctAns: "Pyrenees"
  },
  {
    questionNum: "19",
    questionText: "What is not a GNSS system?",
    choices: [
      "Galileo",
      "Baidou",
      "USNO",
      "GLONASS"
    ],
    correctAns: "USNO"
  },
  {
    questionNum: "20",
    questionText: "The Name Of Which Central American Country Means The Saviour In English?",
    choices: [
      "Mexico",
      "Honduras",
      "El Salvador",
      "Belize"
    ],
    correctAns: "El Salvador"
  },
  {
    questionNum: "21",
    questionText: "Climate change is likely to create...",
    choices: [
      "more extreme weather events",
      "mass migration and food/water insecurity",
      "disrupt the global economy",
      "all of the above"
    ],
    correctAns: "all of the above"
  },
  {
    questionNum: "22",
    questionText: "What is the world's most remote human settlement?",
    choices: [
      "Tristan da Cunha",
      "Hakahau",
      "Barrow Town",
      "Nuuk"
    ],
    correctAns: "Tristan da Cunha"
  },
  {
    questionNum: "23",
    questionText: "What country doesn't share a border with North Korea?",
    choices: [
      "China",
      "South Korea",
      "Japan",
      "Russia"
    ],
    correctAns: "Japan"
  },
  {
    questionNum: "24",
    questionText: "Which African nation does not have a sea border?",
    choices: [
      "Benin",
      "Lesotho",
      "Tanzania",
      "Democratic Republic of Congo"
    ],
    correctAns: "Lesotho"
  },
  {
    questionNum: "25",
    questionText: "The Wilson cycle describes what process?",
    choices: [
      "Sea-level rise",
      "Redistibution of atmospheric heat",
      "Glacial retreat",
      "Continental drift"
    ],
    correctAns: "Continental drift"
  },
  {
    questionNum: "26",
    questionText: "The Chicxulub crater is associated with what deep time, mass extinction event?",
    choices: [
      "Cretaceous-tertiary",
      "Archaen/Proterozoic",
      "Permian/triassic",
      "Devonian"
    ],
    correctAns: "Cretaceous-tertiary"
  },
  {
    questionNum: "27",
    questionText: "What civilisation is often credited with producing the first world map?",
    choices: [
      "Celts",
      "Greeks",
      "Babylonians",
      "Xia dynasty"
    ],
    correctAns: "Greeks"
  },
  {
    questionNum: "28",
    questionText: "Geography is described as the ${what} of sciences?",
    choices: [
      "King",
      "Queen",
      "Jack",
      "Rook"
    ],
    correctAns: "Queen"
  }
];