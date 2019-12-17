import { OverrideEvent } from '../sheard/types'
import converter from '../converter'

const inputHandle = (event: Event) => {
  const e = event as OverrideEvent<HTMLTextAreaElement>

  const displayPlace = document.querySelector<HTMLElement>('#display')
  if (!displayPlace) return
  if (!e?.target?.value?.trim()) return
  if (!window.Kuromoji.tokenizer || window.Kuromoji.failedInit) return

  const tokens = window.Kuromoji.tokenizer.tokenize(e.target.value.trim())

  console.log(tokens)

  displayPlace.textContent = converter(tokens)
}

const watchInput = () => {
  const textarea = document.querySelector<HTMLTextAreaElement>('#input')
  if (!textarea) return

  textarea.addEventListener('keydown', inputHandle)
  textarea.addEventListener('change', inputHandle)
}

export default watchInput
