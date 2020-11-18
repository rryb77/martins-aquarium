import { useTips } from './TipDataProvider.js'
import { Tip } from './Tip.js'

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tankTips")
    const tips = useTips()

    // Generate all of the HTML for all of the fish
    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="tankTips">
            ${tipHTMLRepresentations}
        </article>
    `
}