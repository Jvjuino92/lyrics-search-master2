const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

const apiURL = `https://api.lyrics.ovh`

const fetchSongs = term => {
    fetch(`${apiURL}/suggest/${term}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const searchTerm = searchInput.value.trim()

    if (!searchTerm) {
        songsContainer.innerHTML = `<li class="warning-message">Please insert an artist or song name</li>`
        return
    }

    fetchSongs(searchTerm)
})

// 18:22