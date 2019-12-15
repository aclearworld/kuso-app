import { createH1 } from './index'

describe('createH1', () => {
  test('createH1 is inserted to under the #root', () => {
    // Set up our document body
    document.body.innerHTML = '<div id="root"></div>'

    createH1()

    const insertedElement = document.querySelector('h1') as HTMLHeadingElement
    expect(insertedElement.textContent).toEqual('hello vanilla js with ts')
  })
})
