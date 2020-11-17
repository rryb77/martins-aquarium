// importing the methods used
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

// export to main.js to get everything started
export const FishList = () => {

    // select where I want the fishHTMLRepresentations to show up on the DOM
    const contentElement = document.querySelector(".fishList")
    
    // call useFish and store results in a variable
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    
    // Loop through the array to add all the individual fish via Fish()
    for (const fish of fishes) {
       fishHTMLRepresentations += Fish(fish)

    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}