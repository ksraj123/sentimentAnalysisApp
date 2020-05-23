import { checkForUrl } from './urlChecker'
import { apiAnalyse } from './apiRequest'

function handleSubmit(event) {
    event.preventDefault()
    const url = document.getElementById('url').value
    console.log("Inside handle submit");

    if (checkForUrl(url)) { 
        apiAnalyse(url);
    } else { 
        alert("Invalid URL, please enter valid url"); 
    }
}

export { handleSubmit }
