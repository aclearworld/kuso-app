export const createH1 = () => {
  const root = document.querySelector('#root') as HTMLDivElement
  const h1 = document.createElement<'h1'>('h1')
  root.appendChild<HTMLHeadingElement>(h1)
  h1.textContent = 'hello vanilla js with ts'
}

window.addEventListener('DOMContentLoaded', createH1)
