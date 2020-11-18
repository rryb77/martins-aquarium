/**
 *  Fish which renders individual fish objects as HTML
 */
export const Location = (location) => {
    return `
        <section class="location">
            <div class="location__image"><img src="/images/${location.image}" alt=""></div>
            <div class="location__name">${location.name}</div>
            <div class="location__url"><a href="${location.url}">Link</a></div>
            <div class="location__description">${location.description}</div>
        </section>
    `
}