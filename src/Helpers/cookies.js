// @flow
const isBrowser = typeof window !== "undefined"

export const setCookie = (
  name: string,
  value: string,
  days: number,
  path?: string = '/'
): void => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  if (isBrowser) {
    document.cookie =
      name +
      '=' +
      encodeURIComponent(value) +
      '; expires=' +
      expires +
      '; path=' +
      path
  }
}

export const getCookie = (name: string): string | null => {
  if (isBrowser) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=')

      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, null)
  }
}

export const deleteCookie = (name: string, path: string): void => {
  setCookie(name, '', -1, path)
}
