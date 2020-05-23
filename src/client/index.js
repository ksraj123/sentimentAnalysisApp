import { checkForUrl } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { nothing } from './service-worker'
import './styles/semantic-ui/dimmer.min.scss'
import './styles/semantic-ui/loader.min.scss'
import './styles/semantic-ui/form.min.scss'
import './styles/styles.scss'

document.querySelector('form').addEventListener('submit', handleSubmit);