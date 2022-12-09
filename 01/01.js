const {read} = require('../utils/readFile')

const getTotalCaloriesByElf = inventoryPath => {
    const inventory = read(inventoryPath)
    const caloriesByElf = []
    let sumCalories = 0
    inventory.forEach(calories => {
        if (!calories) {
            caloriesByElf.push(sumCalories)
            sumCalories = 0
            return
        }
        sumCalories += parseInt(calories)
    })
    return caloriesByElf
}

const getMaxTotalCalories = (inventoryPath) => {
    const caloriesByElf = getTotalCaloriesByElf(inventoryPath)
    return Math.max(...caloriesByElf)
}

const getTopThreeElvesTotalCalories = (inventoryPath) => {
    const caloriesByElf = getTotalCaloriesByElf(inventoryPath)
    return caloriesByElf
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((sum, calories) => sum + calories, 0)
}

module.exports = {getMaxTotalCalories, getTopThreeElvesTotalCalories}
