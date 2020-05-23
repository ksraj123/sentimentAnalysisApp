import { handleSubmit } from './formHandler'

test('Checking form handler', () => {
    document.body.innerHTML = `
    <form class="ui form">
        <input id="url" type="text" value="saurabh" name="url">
        <button type="submit">Analyse</button>
    </form>
    <div id="result"></div>
    `;
    document.getElementById('url').value = "saurabh";
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
    form.submit();
    
    const result = document.querySelector("#result");
  
    expect(result.innerText).toBe("Invalid URL!!");
  });
