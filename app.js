const btn = document.getElementById("btn");
const img = document.getElementById("image");
const memeTitle = document.getElementById("title");
const memeAuthor = document.getElementById("author");

const URL = "https://meme-api.com/gimme/wholesomememes"

async function getMeme() {
    const response = await fetch(URL);
    const data = await response.json();
    updateMeme(data.url, data.title, data.author);
}

function updateMeme(url, title, author) {
    img.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}

btn.addEventListener('click', getMeme);

getMeme();