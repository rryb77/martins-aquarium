const quoteCollection = [
    {
        quote: "The snack that smiles back.",
        author: "- Goldfish",    
    },
    {
        quote: "The snack that smiles back.",
        author: "- Goldfish",    
    },
    {
        quote: "The snack that smiles back.",
        author: "- Goldfish",    
    }
]

// Take the array above and slice (copy) it into a new array to preserve the original
export const useQuote = () => {
    return quoteCollection.slice()
}
