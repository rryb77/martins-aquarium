// Data set for "tips" via JS instead of hardcoded HTML

// An array of tips storing the collection as objects 
const tipCollection = [
    {
        tipLine: "Maintain Balance Before Adding Fish to a New Aquarium" 
    },
    
    {
        tipLine: "Decorate Your Aquarium for the Fish"
    },
    
    {
        tipLine: "Don’t Worry if Your Fish Hide at First"
    },
    
    {
        tipLine: "Aquarium Lighting Should Be Used to Create a Day and Night Cycle"
    },

    {
        tipLine: "Clean Your Aquarium Regularly, Just Not Right After Setup"
    },

    {
        tipLine: "Do Your Research Before Buying More Fish"
    }
]

// Take the array above and slice (copy) it into a new array to preserve the original
export const useTips = () => {
    return tipCollection.slice()
}