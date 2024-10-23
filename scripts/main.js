// scripts/main.js
import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Get the DOM elements where you want to render the HTML
const fishContainer = document.getElementById('fishList')
const tipContainer = document.getElementById('tipList')
const locationContainer = document.getElementById('locationList')

// Render each HTML string to the correct DOM element
fishContainer.innerHTML = fishHTML
tipContainer.innerHTML = tipHTML
locationContainer.innerHTML = locationHTML