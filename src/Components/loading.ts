export const displayLoadingCircle = () => {
  setTimeout(() => {
    const loader = document.querySelector<HTMLDivElement>('#loader')
    if (loader) loader.style.visibility = 'visible'
  }, 2300)
}

export const removeLoadingPage = () => {
  const loadingPage = document.querySelector<HTMLDivElement>('#loading-root')
  if (loadingPage) loadingPage.remove()
}
