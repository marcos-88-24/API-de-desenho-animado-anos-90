'use strict'

async function pegarfotos() {
    const personagem = document.getElementById('personagen').value

    const url = `https://rickandmortyapi.com/api/character/?name=${personagem}`

    const response = await fetch(url)
    const data = await response.json()

    if (!data.results) {
        return []
    }

    return data.results
}

async function preenchergaleria() {
    const fotos = await pegarfotos()

    const galeria = document.getElementById('galeria')
    galeria.innerHTML = ''

    if (fotos.length === 0) {
        galeria.innerHTML = '<p>Nenhum personagem encontrado.</p>'
        return
    }

    fotos.forEach(personagem => {
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <h2>${personagem.name}</h2>
            <img src="${personagem.image}" alt="${personagem.name}">
            <p>${personagem.species} - ${personagem.status}</p>
        `

        galeria.appendChild(card)
    })
}

document.getElementById('pesquisar')
    .addEventListener('click', preenchergaleria)

document.getElementById('personagen')
    .addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            preenchergaleria()
        }
    })
