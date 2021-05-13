const AstrologyAPI = require('./astrology')
const asyncApiCall = async () => {
    const response = await AstrologyAPI.getCompatibility('jhon', '1987-05-21', 'alice', '1989-09-27')
    comp = response.data.data["result"]["Compatibility"]
    console.log(comp["Heading"])
    console.log(comp["Details"])
}
asyncApiCall()
