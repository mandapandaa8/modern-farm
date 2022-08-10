import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { createPlan } from "./plan.js"

export const plantSeeds = (plantingPlan) => {
    for (let i = 0; i < plantingPlan.length; i++) {
        for (let j = 0; j < 6; j++) {
            if (plantingPlan[i][j] === "Soybean") {
                let soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plantingPlan[i][j] === "Corn") {
                let cornSeed = createCorn()
                for (let corn of cornSeed) {
                    addPlant(corn)
                }
            }
            else if (plantingPlan[i][j] === "Sunflower") {
                let sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plantingPlan[i][j] === "Asparagus") {
                let asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plantingPlan[i][j] === "Wheat") {
                let wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
            else if (plantingPlan[i][j] === "Potato") {
                let potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
        }
    }
    return usePlants()
}