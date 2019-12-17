import { IpadicFeatures, Tokenizer } from 'kuromoji'

export interface OverrideEvent<T extends HTMLElement> extends Event {
  target: T
}

/**
 * --------------------------------------------------
 * global variable define
 * --------------------------------------------------
 */
//
interface Kuromoji {
  tokenizer: Tokenizer<IpadicFeatures> | null
  failedInit: boolean
}

declare global {
  interface Window {
    Kuromoji: Kuromoji
  }
}
