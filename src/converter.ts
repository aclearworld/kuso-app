import { IpadicFeatures } from 'kuromoji'
import { randomChoiceFromArray } from './sheard/utilty'
import { emojiList } from './emoji'
import { HTMLElementEvent } from './sheard/types'

const randomChoiceEmoji = (): string => {
  const choice = randomChoiceFromArray<number>(emojiList)

  return String.fromCodePoint(choice || 0x231a)
}

const converter = (tokens: IpadicFeatures[]): string => {
  return tokens
    .map(token => {
      if (token.pos === '名詞' && token.pos_detail_1 === '一般')
        return randomChoiceEmoji()

      return token.surface_form
    })
    .join('')
}

const watchInput = () => {
  const textarea = document.querySelector<HTMLTextAreaElement>('#input')
  const displayPlace = document.querySelector<HTMLElement>('#display')

  if (!textarea || !displayPlace) return

  textarea.addEventListener('change', event => {
    const e = event as HTMLElementEvent<HTMLTextAreaElement>
    if (!e?.target?.value?.trim()) return
    if (!window.Kuromoji.tokenizer || window.Kuromoji.failedInit) return

    const tokens = window.Kuromoji.tokenizer.tokenize(e.target.value.trim())
    displayPlace.textContent = converter(tokens)
  })
}

export default watchInput
