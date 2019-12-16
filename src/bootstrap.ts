import watchInput from './converter'
import { builder } from 'kuromoji'

const displayLoadingCircle = () => {
  setTimeout(() => {
    const loader = document.querySelector<HTMLDivElement>('#loader')
    if (loader) loader.style.visibility = 'visible'
  }, 2300)
}

const removeLoadingPage = () => {
  const loadingPage = document.querySelector<HTMLDivElement>('#loading-root')
  if (loadingPage) loadingPage.remove()
}

const initKuromoji = () => {
  window.Kuromoji = {
    tokenizer: null,
    failedInit: true,
  }

  builder({ dicPath: '/dict' }).build((err, tokenizer) => {
    if (err) {
      alert('Sorry! Failed load dictionary. Please try again later.')

      return
    }

    window.Kuromoji.tokenizer = tokenizer
    window.Kuromoji.failedInit = false
  })

  const id = setInterval(() => {
    if (!window.Kuromoji.failedInit) {
      removeLoadingPage()
      clearInterval(id)
    }
  }, 4000)
}

const bootstrap = () => {
  displayLoadingCircle()
  initKuromoji()
  watchInput()
}

export default bootstrap
