let growingPlants = []

export const addPlant = (seedObject) => {
    growingPlants.push(seedObject)
}

export const usePlants = () => {
    return growingPlants
}