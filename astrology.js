const axios = require("axios");
const fs = require('fs');

const secrets = JSON.parse(fs.readFileSync('secrets.json'));
const api_key = secrets["api_key"]

const BASE_URL = `https://astrology-horoscope.p.rapidapi.com`
module.exports = {
    getCompatibility: (yourName, yourBirthday, theirName, theirBirthday) => axios({
        method:"POST",
        url : BASE_URL + `/zodiac_compatibility/result/`,
        headers: {
            "content-type":"application/x-www-form-urlencoded",
            "x-rapidapi-host":"astrology-horoscope.p.rapidapi.com",
            "x-rapidapi-key": api_key
        },
        params: {
            mystic_dob: yourBirthday,
            mystic_dob2: theirBirthday,
            mystic_name: yourName,
            mystic_name2: theirName,
            mystic_gender: "m",
            mystic_gender2: "f"
        }
    })
}