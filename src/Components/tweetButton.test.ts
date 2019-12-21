import { watchTweetButton } from './tweetButton'

describe('watchTweetButton', () => {
  beforeEach(() => {
    // Set up document body
    document.body.innerHTML =
      '<div id="tweet-root">\n' +
      '  <button type="button" id="tweet-button">Tweet</button>\n' +
      '</div>'
  })

  test('handling event of click', () => {
    const mockFunc = jest.fn<void, Array<MouseEvent>>()
    watchTweetButton(mockFunc)

    const button = document.querySelector<HTMLButtonElement>('#tweet-button')
    const clickEvent = document.createEvent('HTMLEvents')
    clickEvent.initEvent('click', true, true)
    if (button === null) throw new Error('failed initialize test env')
    button.dispatchEvent(clickEvent)

    expect(mockFunc).toBeCalled()
  })
})
