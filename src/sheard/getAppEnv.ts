type AppEnv = {
  topUrl: string
  appTitle: string
}

const getAppEnv = (): AppEnv => {
  return {
    topUrl: window.location.origin,
    appTitle:
      document.querySelector<HTMLHeadingElement>('#site-title')?.textContent ||
      '',
  }
}

export default getAppEnv
