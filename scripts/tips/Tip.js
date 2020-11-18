/**
 *  Tip which renders individual tip objects as HTML
 */
export const Tip = (tip) => {
    return `
    <section class="tip">
            <div class="tip__text">${tip.tipLine}</div>
    </section>
    `
}