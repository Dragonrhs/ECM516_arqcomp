require('dotenv').config()
// console.log(process.env)
const axios = require('axios').default;

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

// Isso resulta em promise
axios.get(url)
.then( (res)=> {
    console.log(res.data)
    console.log('*************************')
return res.data
})
.then((res)=>{
    console.log(`cnt: ${res.cnt}`)
    console.log('*************************')
    return res
})
.then((res)=>{
    for(let previsao of res.list){
        // data: max: 23 min: 22
        // console.log(previsao)
        console.log(
            `${new Date(previsao.dt * 1000).toLocaleDateString()}:
            max ${previsao['main'].temp_max}\u00B0
            min ${previsao['main']['temp_min']}\u00B0
            desc: ${previsao['weather'][0]['description']}
            `)
        console.log('*************************')
    }
    return res
})
.catch((err)=>{
    console.log("erro")
})