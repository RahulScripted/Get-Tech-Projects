const content = document.getElementById("content");
const author = document.getElementById("author");
const get_url = "https://api.quotable.io/random";

async function getUrl(url){
    const response = await fetch(url);
    let data = await response.json();

    content.innerHTML = data.content;
    author.innerHTML = data.author;
}
getUrl(get_url);