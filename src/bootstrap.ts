import watchInput from './converter'
import { builder } from 'kuromoji'

const initKuromoji = () => {
  window.Kuromoji = {
    tokenizer: null,
    failedInit: true,
  }

  builder({ dicPath: '/dict' }).build((err, tokenizer) => {
    if (err) {
      window.Kuromoji.failedInit = true

      return
    }

    window.Kuromoji.tokenizer = tokenizer
    window.Kuromoji.failedInit = false
  })
}

const bootstrap = () => {
  initKuromoji()
  watchInput()
}

export default bootstrap
