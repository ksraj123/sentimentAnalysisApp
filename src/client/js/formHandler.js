import { checkForUrl } from './urlChecker'

function handleSubmit(event, fn) {
    event.preventDefault()
    const url = document.getElementById('url').value

    if (checkForUrl(url)) { 
        fn(url);
    } else {
        document.querySelector("#result").innerText = "Invalid URL!!";
    }
}

export { handleSubmit }
