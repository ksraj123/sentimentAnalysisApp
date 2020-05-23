import { apiAnalyse } from './apiRequest';
const axios = require('axios');

jest.mock('axios');

test("testing api call", async function (){
    document.body.innerHTML = `
        <div class="ui dimmer"></div>
        <div id="result"></div>
    `;
    axios.post.mockResolvedValue({
        data: {
            polarity: "testing"
        }
    })
    await apiAnalyse('https://www.npmjs.com/package/axios');
    expect(document.querySelector("#result").innerText).toBe("testing");
})