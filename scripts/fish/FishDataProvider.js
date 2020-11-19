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

// Seperate the fish by type
// List the fish by those types
// 1) Holy Fish
// 2) Soliders
// 3) unworthy

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
            
        }
    }

    return holyFish
}

// Testing the function above
// let theBestFish = mostHolyFish()
// console.log(" are they holy?", theBestFish)

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 != 0) {
            soliders.push(fish)
            
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    
    for (const fish of fishCollection) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}