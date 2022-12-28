const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

const apiURL = `https://api.lyrics.ovh`

form.addEventListener('submit', event => {
    event.preventDefault()

    const searchTerm = searchInput.value.trim()

    console.log(searchTerm)
})

// 7:04