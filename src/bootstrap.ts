import { builder } from 'kuromoji'
import { displayLoadingCircle, removeLoadingPage } from './Components/loading'
import watchTweetButton from './Components/tweetButton'
import watchInput from './Components/displayEmojiTweet'

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
  watchTweetButton()
}

export default bootstrap
