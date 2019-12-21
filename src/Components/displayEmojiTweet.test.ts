import { watchInput } from './displayEmojiTweet'

describe('watchInput', () => {
  beforeEach(() => {
    // Set up document body
    document.body.innerHTML =
      '<div>' +
      '<textarea id="input" class="input tweet-input" name="input" rows="10"></textarea>' +
      '</div>'
  })

  test('handling event of keydown', () => {
    const mockFunc = jest.fn<void, Event[]>()
    watchInput(mockFunc)

    const textarea = document.querySelector<HTMLTextAreaElement>('#input')
    const keydownEvent = document.createEvent('HTMLEvents')
    keydownEvent.initEvent('keydown', true, true)
    if (textarea === null) throw new Error('failed initialize test env')
    textarea.dispatchEvent(keydownEvent)

    expect(mockFunc).toBeCalled()
  })

  test('handling event of change', () => {
    const mockFunc = jest.fn<void, Event[]>()
    watchInput(mockFunc)

    const textarea = document.querySelector<HTMLTextAreaElement>('#input')
    const changeEvent = document.createEvent('HTMLEvents')
    changeEvent.initEvent('change', true, true)
    if (textarea === null) throw new Error('failed initialize test env')
    textarea.dispatchEvent(changeEvent)

    expect(mockFunc).toBeCalled()
  })
})
