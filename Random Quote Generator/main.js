const quotes = [
    "You cannot live a perfect day without doing something for someone who will never be able to repay you.",
    "Give a man a fish, and you'll feed him for a day. Teach a man to fish, and he'll buy a funny hat. Talk to a hungry man about fish, and you're a consultant.",
    "A celebrity is one who is known to many persons he is glad he doesn't know.",
    "Life engenders life. Energy creates energy. It is by spending oneself that one becomes rich.",
];




quotes.forEach(myFunction)

function myFunction() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteText = document.getElementById("quoteText").textContent = randomQuote;
};


