
import test from 'ava'
import space from '../index'

test('returns a string', t => {
  const css = space()
  console.log(css)
  t.is(typeof css, 'string')
})

