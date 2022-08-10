import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


export const harvestPlants = (addPlant) => {
    let seedObject = []
    for (let i = 0; i < addPlant.length; i++) {
        if (addPlant[i].type === "Corn") {
            seedObject.push(addPlant[i])
            seedObject.push(addPlant[i])
            seedObject.push(addPlant[i])
        }
        else {
        for (let j = 0; j < addPlant[i].output; j++) {
            seedObject.push(addPlant[i])
            }
        }
    }
    return seedObject
}