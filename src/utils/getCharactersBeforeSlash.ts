export function getCharactersBeforeSlash(inputString: string) {
  // Use a regular expression to match any non-space characters before a slash
  const regex = /^\s*([^\/\s]+)/
  const match = inputString.match(regex)

  // If there is a match, return the characters before the slash
  if (match) {
    return match[1]
  }

  // If there is no match, return an empty string
  return ''
}

export function getCharactersAfterSlash(inputString: string) {
  // Use a regular expression to match any non-space characters after a slash
  const regex = /\/\s*([^\/\s]+)/
  const match = inputString.match(regex)

  // If there is a match, return the characters after the slash
  if (match) {
    return match[1]
  }

  // If there is no match, return an empty string
  return ''
}
