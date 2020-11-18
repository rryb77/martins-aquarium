// TODO: Import `useFish` from the data provider module
import { useQuote } from './QuoteDataProvider.js'
import { Quote } from './Quote.js'

export const QuoteList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".quotes")
    const quotes = useQuote()

    let quoteHTML = ""
    for (const quote of quotes) {
        quoteHTML += Quote(quote)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    <aritcle class="quotes">
        ${quoteHTML}
    </article>
    `
}