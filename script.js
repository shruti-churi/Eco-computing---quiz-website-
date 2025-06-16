
    function answer(option) {
      const result = document.getElementById('result');
      if (option === 'a') {
        result.textContent = 'Correct!';
      } else {
        result.textContent = ' wrong answer';
      }
    }


    function answer2(option) {
      const result = document.getElementById('result-2'); // Specific ID for this question's result
      if (option === 'b') { // Correct answer for Q2 is 'b'
        result.textContent = 'Correct';
      } else {
        result.textContent = 'wrong answer ';
      }
    }

    function answer3(option) {
      const result = document.getElementById('result-3'); // Specific ID for this question's result
      if (option === 'a') { // Correct answer for Q3 is 'a'
        result.textContent = ' wrong answer';
      } else {
        result.textContent = 'Correct! ';
      }
    }


    


    // Add this below your existing fetchWeather() function

const ecoTips = [
   "Unplug chargers when devices are fully charged.",
  "Turn off your computer and monitor when not in use.",
  "Use sleep mode for short breaks instead of leaving your computer on.",
  "Lower your screen brightness.",
  "Opt for digital documents instead of printing.",
  "Recycle old electronics responsibly.",
  "Take care of your devices to extend their lifespan.",
  "Use dark mode on your devices and apps where available."
];

function displayRandomEcoTip() {
  const tipElement = document.getElementById('eco-tip');
  const randomIndex = Math.floor(Math.random() * ecoTips.length); // Get a random index
  tipElement.textContent = ecoTips[randomIndex]; // Display the tip at that index
}
