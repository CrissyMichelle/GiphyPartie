console.log("Let's get this party started!");
let apiKey = "K5Z7Isog7oI0Et7L0pcOTbYCTrBUkM36";
const form = document.querySelector('#searchForm');
const input = document.querySelector('#search')
document.addEventListener("DOMContentLoaded", init);
function init() {
    form.addEventListener("submit", ev => {
        ev.preventDefault();
        getRandomGif(input.value);
    })
}
async function consolationGig() {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&offset=0&rating=g&lang=en&q=umhello`);
    const img = document.querySelector('#gif');
    img.src = res.data.data[0].images.downsized.url;
}
async function getRandomGif(term) {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&offset=0&rating=g&lang=en&q=${term}`;
        const res = await axios.get(url);
        let str = document.getElementById("search").value.trim();
        console.log(res.data.data[0].images.downsized.url);
        const img = document.querySelector('#gif');
        img.src = res.data.data[0].images.downsized.url;
    } catch(e) {
        alert("um, WHAT HAPPENED? i mean, did you search for something truly arcane?? Maybe the internet's down");
        consolationGig();
    }

}