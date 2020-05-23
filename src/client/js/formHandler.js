import { checkForUrl } from './urlChecker'
import { apiAnalyse } from './apiRequest'

function handleSubmit(event) {
    event.preventDefault()
    const url = document.getElementById('url').value

    if (checkForUrl(url)) { 
        apiAnalyse(url);
    } else {
        document.querySelector("#result").innerText = "Invalid URL!!";
    }
}

export { handleSubmit }
