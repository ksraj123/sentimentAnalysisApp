import { apiAnalyse } from './js/apiRequest'
import { handleSubmit } from './js/formHandler'
import './styles/styles.scss'

document.querySelector('form').addEventListener('submit', (evt)=>{
    handleSubmit(evt, apiAnalyse);
});