const quotes = [
    "The only limit to our realizarion of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucious",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "You can't build a reputation on what you are going to do. - Henry Ford",
    "What we fear the most is usually what we most need to do. - Tim Ferriss"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
}

function shareQuote() {
    const quote = document.getElementById('quote').textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Inspiring Quote',
            text: quote,
            url: location.href
        }).catch(console.error);
    } else {
        prompt('Share this quote:', quote);
    }
}

function addToFavorites() {
    const quote = document.getElementById('quote').textContent;
    const favoritesList = document.getElementById('favorites-list');
    const listItem = document.createElement('li');
    listItem.textContent = quote;
    favoritesList.appendChild(listItem);
}

document.getElementById('refresh-button').addEventListener('click', displayQuote);
document.getElementById('share-button').addEventListener('click', shareQuote);
document.getElementById('favorite-button').addEventListener('click', addToFavorites);

// Display a random quote when the app loads
window.onload = displayQuote;
