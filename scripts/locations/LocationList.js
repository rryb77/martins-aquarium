import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const locations = useLocation()

    let locationHTML = ""
    for (const location of locations) {
        locationHTML += Location(location)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class=".locations">
            ${locationHTML}
        </article>
    `
}