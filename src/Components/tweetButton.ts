import getAppEnv from '../sheard/getAppEnv'

const clickHandle = () => {
  const displayPlace = document.querySelector<HTMLElement>('#display')
  if (!displayPlace || !displayPlace.textContent) {
    alert('投稿内容を入力してね！')

    return
  }

  const appEnv = getAppEnv()
  const url = `https://twitter.com/share?url=${appEnv.topUrl}/&text=${displayPlace.textContent}  %20%23${appEnv.appTitle}%20`
  window.open(url)
}

export const watchTweetButton = (handler: (event: MouseEvent) => void) => {
  const button = document.querySelector<HTMLButtonElement>('#tweet-button')
  if (!button) return

  button.addEventListener('click', handler)
}

export default () => watchTweetButton(clickHandle)
