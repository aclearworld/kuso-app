import { displayLoadingCircle, removeLoadingPage } from './loading'

describe('loading', () => {
  beforeEach(() => {
    // Set up document body
    document.body.innerHTML =
      '<div id="loading-root"><div  style="visibility: hidden" id="loader" title="0"></div>'
  })

  test('displayLoadingCircle', () => {
    displayLoadingCircle()

    setTimeout(() => {
      const loader = document.querySelector<HTMLDivElement>('#loader')
      if (loader === null) throw new Error('failed initialize test env')
      expect(loader.style.visibility).toBe('visible')
    }, 2500)
  })

  test('removeLoadingPage', () => {
    removeLoadingPage()

    const loadingPage = document.querySelector<HTMLDivElement>('#loading-root')
    expect(loadingPage).toBeNull()
  })
})
