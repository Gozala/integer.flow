/* @flow */

export opaque type integer: number = number

export const parseInteger = (input: string): ?integer => {
  const size = input.length
  if (size === 0) {
    return null
  } else {
    const ch = input[0]
    if (ch === "0" && input[1] === "x") {
      for (let i = 2; i < size; ++i) {
        const ch = input[i]
        if (
          ("0" <= ch && ch <= "9") ||
          ("A" <= ch && ch <= "F") ||
          ("a" <= ch && ch <= "f")
        ) {
          continue
        }
        return null
      }

      return parseInt(input, 16)
    }

    if (ch > "9" || (ch < "0" && ((ch !== "-" && ch !== "+") || size === 1))) {
      return null
    }

    for (let i = 1; i < size; ++i) {
      const ch = input[i]
      if (ch < "0" || "9" < ch) {
        return null
      }
    }

    return parseInt(input, 10)
  }
}

const toInteger = (value: number): integer => {
  switch (value) {
    case +Infinity:
      return Number.MAX_SAFE_INTEGER
    case -Infinity:
      return Number.MIN_SAFE_INTEGER
    case value:
      return value
    default:
      return 0
  }
}

export const round = (value: number): integer => toInteger(Math.round(value))

export const floor = (value: number): integer => toInteger(Math.floor(value))

export const ceiling = (value: number): integer => toInteger(Math.ceil(value))

export const truncate = (value: number): integer => value | 0

export const div = (a: integer, b: integer): integer => (a / b) | 0

export const rem = (a: integer, b: integer): integer => a % b

export const mod = (a: integer, b: integer): integer => {
  if (b === 0) {
    throw new TypeError("Cannot perform mod 0. Division by zero error.")
  }
  const r = a % b
  const m = a === 0 ? 0 : b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b)

  return m === b ? 0 : m
}
