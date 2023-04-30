const btnEl=document.getElementById("btn")
const animeContainerEl= document.querySelector(".anime-container")
const animeImgEl = document.querySelector(".anime-pic")
const nameEl = document.getElementById("name")

btnEl.addEventListener('click', async function(){
    try {
        animeContainerEl.style.display = 'block'
        btnEl.disabled = true;
        nameEl.innerText = "Loading.."
        animeImgEl.src = 'loading.svg' //https://loading.io/
        let apiURL = 'https://api.catboys.com/img'
        let response = await fetch(apiURL)
        let data = await response.json()
        // animeImgEl.style.display = 'block'
        // animeImgEl.innerHTML = `<img src="${data.url}" alt="" class="anime-pic" id="anime-pic"> </img>`
        animeImgEl.src = await data.url;
        nameEl.innerText = data.artist;
        btnEl.disabled = false;


    } catch (error) {
        console.log(error)
        nameEl.innerText = "Error occured, pl try later..."
        btnEl.disabled = false;
    }
})