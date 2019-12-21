import { OverrideEvent } from '../sheard/types'
import converter from '../converter'

const inputHandle = (event: Event) => {
  const e = event as OverrideEvent<HTMLTextAreaElement>

  const displayPlace = document.querySelector<HTMLElement>('#display')
  if (!displayPlace) return
  if (!e?.target?.value?.trim()) return
  if (!window.Kuromoji.tokenizer || window.Kuromoji.failedInit) return

  displayPlace.textContent = converter(e.target.value.trim())
}

export const watchInput = (handler: (event: Event) => void) => {
  const textarea = document.querySelector<HTMLTextAreaElement>('#input')
  if (!textarea) return

  textarea.addEventListener('keydown', handler)
  textarea.addEventListener('change', handler)
}

export default () => watchInput(inputHandle)
