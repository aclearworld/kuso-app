import { randomChoiceFromArray } from './sheard/utilty'
import { emojiList } from './emoji'

const randomChoiceEmoji = (): string => {
  const choice = randomChoiceFromArray<number>(emojiList)

  return String.fromCodePoint(choice || 0x231a)
}

export const converter = (text: string, getEmoji: () => string): string => {
  if (!window.Kuromoji.tokenizer || window.Kuromoji.failedInit) return text

  const tokens = window.Kuromoji.tokenizer.tokenize(text)

  return tokens
    .map(token => {
      if (
        token.pos === '名詞' &&
        (token.pos_detail_1 === '固有名詞' || token.pos_detail_1 === '一般')
      )
        return getEmoji()

      return token.surface_form
    })
    .join('')
}

export default (text: string): string => converter(text, randomChoiceEmoji)
