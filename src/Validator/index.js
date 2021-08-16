// @flow

export const validateAcceptButtonLabel = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return 'Accept'
}

export const validateReadMoreButtonLabel = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return 'Read more'
}

export const validateReadMoreButtonLink = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    if (
      parameter.lastIndexOf('http://', 0) === 0 ||
      parameter.lastIndexOf('https://', 0) === 0
    ) {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] readMoreButtonLink parameter should starts with "http://" or "https://"'
    )
  }

  return 'http://aboutcookies.org/'
}

export const validateReadMoreButtonOpenInNewTab = (
  parameter?: any
): boolean => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return true
}

export const validateCookieTextLabel = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return 'This website uses cookies to improve your browsing experience.'
}

export const validateReverseButtons = (parameter?: any): boolean => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return false
}

export const validateBorderRadius = (parameter?: any): number => {
  if (typeof parameter === 'number') {
    if (parameter >= 0) {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] borderRadius parameter should not be negative'
    )
  }

  return 32
}

export const validateJustifyContent = (
  parameter?: any
): 'space-around' | 'space-between' => {
  if (typeof parameter === 'string') {
    if (parameter === 'space-around' || parameter === 'space-between') {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] Accepted values for justifyContent parameter: space-around or space-between'
    )
  }

  return 'space-between'
}

export const validateMaxWidth = (parameter?: any): number => {
  if (typeof parameter === 'number') {
    if (parameter < 400) {
      return 400
    }

    return parameter
  }

  return 1000
}

export const validateCookieExpiration = (parameter?: any): number => {
  if (typeof parameter === 'number') {
    if (parameter > 0) {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] cookieExpiration parameter should be more than 0 day'
    )
  }

  return 30
}

export const validateCookieName = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    if (/\s/.test(parameter)) {
      throw new Error(
        '[react-cookienotice] cookieName parameter should not contain whitespace'
      )
    }

    if (parameter === '') {
      throw new Error(
        '[react-cookienotice] cookieName parameter should have at least one character'
      )
    }

    return parameter
  }

  return 'allow-cookies'
}

export const validateDarkTheme = (parameter?: any): boolean => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const validateDisplayIcon = (parameter?: any): boolean => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return true
}
