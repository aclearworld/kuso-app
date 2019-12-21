import path from 'path'
import kuromoji from 'kuromoji'
import { converter } from './converter'

describe('converter', () => {
  beforeEach(() => {
    window.Kuromoji = {
      tokenizer: null,
      failedInit: true,
    }
  })

  const inputText =
    'このサイトは名詞をランダムな絵文字に変換してTwitterに投稿できるサイトです'

  test('convert noun to emoji', () => {
    kuromoji
      .builder({
        dicPath: path.join(__dirname, '../node_modules/kuromoji/dict/'),
      })
      .build((err, tokenizer) => {
        if (err) throw new Error('failedInit kuromoji')

        window.Kuromoji.tokenizer = tokenizer
        window.Kuromoji.failedInit = false

        const getEmojiToken = () => '##emoji_token##'
        const result = converter(inputText, getEmojiToken)

        expect(result).toBe(
          'この##emoji_token##は##emoji_token##をランダムな##emoji_token##に変換して##emoji_token##に投稿できる##emoji_token##です',
        )
      })
  })

  test('not convert when failedInit kuromoji', () => {
    const getEmojiToken = () => '##emoji_token##'

    const result = converter(inputText, getEmojiToken)

    expect(result).toBe(inputText)
  })
})
