import getAppEnv from './getAppEnv'

describe('getAppEnv', () => {
  beforeEach(() => {
    // Set up document body
    document.body.innerHTML =
      '<h1 id="site-title">絵文字で名詞を隠して楽しくTwitter</h1>'
  })

  test('get appEnv.appTitle', () => {
    const appEnv = getAppEnv()

    expect(appEnv.appTitle).toBe('絵文字で名詞を隠して楽しくTwitter')
  })

  test('get appEnv.topUrl', () => {
    const appEnv = getAppEnv()

    expect(appEnv.topUrl).toBe('http://localhost')
  })
})
