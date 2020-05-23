const axios = require('axios');

async function apiAnalyse (url) {
    document.querySelector(".ui.dimmer").classList.add("active");
    try {
        const response = await axios.post('/analyse', {url});
        console.log(response);
        document.querySelector("#result").innerText = response.data.polarity;
    } catch(error){
        console.log("error", error);
        document.querySelector("#result").innerText = "Try again!";
    }
    document.querySelector(".ui.dimmer").classList.remove("active");
}

export { apiAnalyse }