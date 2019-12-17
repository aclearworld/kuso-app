import { IpadicFeatures } from 'kuromoji'
import { randomChoiceFromArray } from './sheard/utilty'
import { emojiList } from './emoji'

const randomChoiceEmoji = (): string => {
  const choice = randomChoiceFromArray<number>(emojiList)

  return String.fromCodePoint(choice || 0x231a)
}

const converter = (tokens: IpadicFeatures[]): string => {
  return tokens
    .map(token => {
      if (
        (token.pos === '名詞' && token.pos_detail_1 === '固有名詞') ||
        token.pos_detail_1 === '一般'
      )
        return randomChoiceEmoji()

      return token.surface_form
    })
    .join('')
}

export default converter
