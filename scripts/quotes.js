var quotes = [
    {
      "quote": "The desire to create is one of the deepest yearnings of the human soul.",
      "author": "Dieter F. Uchtdorf",
    },
    {
      "quote": "Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.",
      "author": "Bruce Garrabrandt",
    },
    {
      "quote": "You can't use up creativity. The more you use the more you have.",
      "author": "Maya Angelou",
    },
    {
      "quote": "To practice any art, no matter how well or badly, is a way to make your soul grow. So do it.",
      "author": "Kurt Vonnegut",
    },
    {
      "quote": "Creativity involves breaking out of expected patterns in order to look at things in a different way.",
      "author": "Edward de Bono",
    },
    {
      "quote": "All our dreams can come true, if we have the courage to pursue them.",
      "author": "Walt Disney",
    },
    {
      "quote": "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life and that is why I succeed.",
      "author": "Michael Jordan",
    },
    {
      "quote": "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
      "author": "Neil Gaiman",
    },
    {
      "quote": "Do one thing every day that scares you.",
      "author": "Eleanor Roosevelt",
    },
    {
      "quote": "Your passion is waiting for your courage to catch up.",
      "author": "Isabelle Lafleche",
    },
    {
      "quote": "Hold the vision, trust the process.",
      "author": "Unknown",
    },
    {
      "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      "author": "Aristotle",
    }
  ];
  
  let x = Math.floor((Math.random() * quotes.length));

  var output = "";
  output += "<p class='d-flex justify-content-center' id='caption'><strong>" + quotes[x].quote + "</strong></p>";
  output += "<p class='d-flex justify-content-end'>- <em>" + quotes[x].author + "</em></p>";
          
document.getElementById("quote").innerHTML = output;