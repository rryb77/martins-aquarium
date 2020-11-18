export const Quote = (quote) => {
    return `
        <section class="quote">
            <div class="quote__text">${quote.quote}</div>
            <div class="quote__author">${quote.author}</div>
        </section>
    `
}