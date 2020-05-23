function checkForUrl(url) {
    const expression =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 
    const regex = new RegExp(expression);
    return url.match(regex);
}

export { checkForUrl }