const fs = require('fs')
const path = require('path')

const read = filePath => {
    try {
        const buffer = fs.readFileSync(path.join(__dirname, '..', filePath))
        return buffer.toString().split('\n')
    } catch (e) {
        throw new Error(`Read file error -> ${e.message}`)
    }
}

module.exports = {read}
