
import test from 'ava'
import space from '../index'

test('returns a string', t => {
  const css = space()
  t.is(typeof css, 'string')
})

