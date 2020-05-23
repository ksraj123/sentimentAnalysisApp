import { checkForUrl } from './urlChecker'

test("Tests detection of URLs with Regex", ()=>{
    expect(checkForUrl("https://github.com/ksraj123")).not.toBe(null)
});