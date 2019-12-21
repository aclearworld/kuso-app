import { randomChoiceFromArray } from './utilty'

describe('randomChoiceFromArray', () => {
  test('get value from randomChoiceFromArray is contained in param array', () => {
    const values = [187522, 0, 453, 777, 12, 3.15, 77]

    expect(values).toContain(randomChoiceFromArray(values))
  })
})
