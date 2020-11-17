// Adding to the fish collection via JS instead of hardcoded HTML

// A fish array storing the collection as objects 
const fishCollection = [
    {
        name: "Flounder",
        species: "Flounder",
        length: 2,
        location: "Disney World",
        food: "Guppy Food",
        image: "flounder.png"     
    },
    {
        name: "Blinky",
        species: "Uknown",
        length: 78,
        location: "Nuclear Pond",
        food: "Souls",
        image: "blinky.jpg"
    },
    {
        name: "Rainbow Fish",
        species: "Fictional",
        length: 7,
        location: "Library",
        food: "Colors",
        image: "rainbowfish.jpg"       
    }
]

// Take the array above and slice (copy) it into a new array to preserve the original
export const useFish = () => {
    return fishCollection.slice()
}
