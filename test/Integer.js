/* @flow */

import * as Integer from "../"
import test from "blue-tape"

test("test baisc", async test => {
  test.isEqual(typeof Integer, "object")
})

const describe = (title, units) =>
  test(title, async test => {
    for (let unit of units) {
      unit(test)
    }
  })

const goodInt = (actual: string, expect: mixed) => test =>
  test.deepEqual(
    Integer.parseInteger(actual),
    expect,
    `Integer.parseInteger("${actual}") => ${String(expect)}`
  )

const badInt = (actual: string) => test =>
  test.deepEqual(
    Integer.parseInteger(actual),
    null,
    `Integer.parseInteger("${actual}") => null`
  )

describe("Integer.parseInteger", [
  goodInt("1234", 1234),
  goodInt("+1234", 1234),
  goodInt("-1234", -1234),
  badInt("1.34"),
  badInt("1e31"),
  badInt("123a"),
  goodInt("0123", 123),
  goodInt("0x001A", 26),
  goodInt("0x001a", 26),
  goodInt("0xBEEF", 48879),
  badInt("0x12.0"),
  badInt("0x12an"),
  badInt("Infinity"),
  badInt("NaN"),
  badInt("0what?")
])

test("conversions", async test => {
  test.equal(Integer.round(0.6), 1, "Integer.round(0.6) => 1")
  test.equal(Integer.round(0.4), 0, "Integer.round(0.4) => 0")
  test.equal(Integer.round(0.5), 1, "Integer.round(0.5) => 1")
  test.equal(Integer.truncate(-2367.9267), -2367, "truncate -2367.9267")
  test.equal(Integer.floor(-2367.9267), -2368, "floor -2367.9267")
  test.equal(Integer.ceiling(37.2), 38, "ceiling 37.2")
})
