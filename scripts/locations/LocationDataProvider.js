const locationCollection = [
    {
        name: "Great Barrier Reef",
        image: "Great-Barrier-Reef.jpg",
        url: "https://en.wikipedia.org/wiki/Great_Barrier_Reef",
        description: "The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres. The reef is located in the Coral Sea, off the coast of Queensland, Australia</div>"
    }
]

// Take the array above and slice (copy) it into a new array to preserve the original
export const useLocation = () => {
    return locationCollection.slice()
}