const apiAnalyse = async (url) => {
    document.querySelector(".ui.dimmer").classList.add("active");
    try {
        const response = await fetch('/analyse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'url': url
            })
        });
        const resJson = await response.json();
        document.querySelector("#result").innerText = resJson.polarity;
        console.log(resJson);
    } catch(error){
        console.log("error", error);
        document.querySelector("#result").innerText = "Try again!";
    }
    document.querySelector(".ui.dimmer").classList.remove("active");
}

export { apiAnalyse }