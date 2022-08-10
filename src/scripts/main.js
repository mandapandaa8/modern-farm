console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"


const yearlyPlan = createPlan()
//console.log(yearlyPlan)

//* invoke all of the seeds

let soybeanSeed = createSoybean()
//console.log(soybeanSeed)
let cornSeed = createCorn()
//console.log(cornSeed)
let sunflowerSeed = createSunflower()
let asparagusSeed = createAsparagus()
let wheatSeed = createWheat()
let potatoSeed = createPotato()

//* invoke first the addPlant function with a seed variable from above
    //* then invoke the usePlants function using the new variable
        //* from invoking addPlant
            //* console.log it and the output should be an array of that seed

let plantCorn = addPlant(cornSeed)
let addCorn = usePlants(plantCorn)
//console.log(addCorn)

let plantingSeason = plantSeeds(yearlyPlan)
//console.log(plantingSeason)

let theHarvest = harvestPlants(addPlant)
console.log(theHarvest)

