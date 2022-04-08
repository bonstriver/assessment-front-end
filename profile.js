const favColorBtn = document.getElementById('color')
const favPlaceBtn = document.getElementById('place')
const favRitualBtn = document.getElementById('ritual')

const showColor = () => {
    alert(`My favorite color is chartreuse. I don't know what it looks like, but it sure does sound pleasant.`)
}

const showPlace = () => {
    alert(`My favorite place is Northern Arizona, specifically on Humphreys Peak overlooking The Navajo Nation. In other news, I just looked up chartreuse. I wish I hadn't.`)
}

const showRitual = () => {
    alert(`My favorite ritual is The Black Sacrament. You know, from The Dark Brotherhood in Elder Scrolls? They had the coolest outfits, for sure. Never tried it IRL, I just haven't found any human hearts lying around.`)
}

favColorBtn.addEventListener('click', showColor)
favPlaceBtn.addEventListener('click', showPlace)
favRitualBtn.addEventListener('click', showRitual)