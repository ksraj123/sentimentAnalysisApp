function handleSubmit(event) {
    event.preventDefault()
    console.log("Inside handle submit");
    const expression =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 
    const regex = new RegExp(expression);
    const url = document.getElementById('url').value

    if (url.match(regex)) { 
        console.log("Valid URL"); 
    } else { 
        console.log("Invalid URL"); 
    } 
    
    /*
        // check what text was put into the form field
    let formText = document.getElementById('url').value
    console.log('form text');
    checkForUrl(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }) */
}

export { handleSubmit }
