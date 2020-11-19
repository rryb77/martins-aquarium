// importing the methods used
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'
import { mostHolyFish } from './FishDataProvider.js'
import { soldierFish } from './FishDataProvider.js'
import { nonHolyFish } from './FishDataProvider.js'

// export to main.js to get everything started
export const FishList = () => {

    // select where I want the fishHTMLRepresentations to show up on the DOM
    const contentElement = document.querySelector(".fishList")
    
    // call useFish and store results in a variable
    const holyFish = mostHolyFish()
    const soliders = soldierFish()
    const losers = nonHolyFish()

     
    // Loop through the array to add all the individual fish via Fish()
    for (const fishObject of holyFish) {
        const fishHTML = Fish(fishObject)
        contentElement.innerHTML += fishHTML
    }
    for (const fishObject of soliders) {
        const fishHTML = Fish(fishObject)
        contentElement.innerHTML += fishHTML
    }
    for (const fishObject of losers) {
        const fishHTML = Fish(fishObject)
        contentElement.innerHTML += fishHTML
    }
}