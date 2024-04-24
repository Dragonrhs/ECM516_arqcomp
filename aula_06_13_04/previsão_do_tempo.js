require('dotenv').config()
console.log(process.env)
//const APP_ID='b9710e70d35df579adb89d53c756cc03'
const{
    APP_ID,
    Q,
    CNT,
    UNITS,
    LANG_WEATHER,
    PROTOCOL,
    BASE_URL
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APP_ID}&q=${Q}&cnt=${CNT}&lang=${LANG_WEATHER}`

console.log(url)