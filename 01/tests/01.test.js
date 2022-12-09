const {getMaxTotalCalories, getTopThreeElvesTotalCalories} = require('../01')

it('should fail when inventory file not exists', () => {
    const fn = () => getMaxTotalCalories('/foo-input')

    expect(fn).toThrow(Error)
})

it('should return max total calories', () => {
    const result = getMaxTotalCalories('/01/tests/test-input.txt')

    expect(result).toBe(13)
})

it('should top three elves total calories', () => {
    const result = getTopThreeElvesTotalCalories('/01/tests/test-input.txt')

    expect(result).toBe(32)
})
