
const abbr = str => str.split('-').map(s => s.charAt(0)).join('')

const createPrefixes = length => {
  const vals = [
    'md', 'lg', 'sm', 'xl', 'xs', 'xxl', 'xxs'
  ]

  const prefixes = []

  Array.from({ length })
    .map((n, i) => i)
    .forEach(s => {
      if (s % 2) {
        prefixes.push(vals[s])
      } else {
        prefixes.unshift(vals[s])
      }
    })

  return prefixes
}

const getPrefix = length => i => {
  const prefixes = createPrefixes(length)
  return prefixes[i]
}

const createRule = (prefix) => property => (step, i) => {
  const selector = prefix
    ? `${prefix}-${abbr(property)}${i}`
    : `${abbr(property)}${i}`
  return `.${selector}{${property}:${step}px}`
}

const createMediaRule = breakpoint => rules => {
  return `@media screen and (min-width:${breakpoint}em){${rules.join('')}}`
}

const space = ({
  space = [
    8,
    16,
    32,
    48,
    64,
    96
  ],
  breakpoints = [
    40,
    52,
    64
  ],
  properties = [
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
  ]
} = {}) => {
  const rules = []

  if (space[0] !== 0) {
    space.unshift(0)
  }

  const prefix = getPrefix(breakpoints.length)
  const breakpointRules = breakpoints
    .filter(b => !isNaN(parseFloat(b)))
    .map((b, i) => ({
      breakpoint: b,
      func: createRule(prefix(i))
    }))

  breakpointRules.unshift({
    breakpoint: null,
    func: createRule(null)
  })

  breakpointRules.forEach(({ breakpoint, func }) => {
    const arr =  []
    const propertyRules = properties.map((p, i) => func(p))

    propertyRules.forEach(p => {
      space.forEach((step, i) => {
        arr.push(p(step, i))
      })
    })

    if (breakpoint) {
      rules.push(createMediaRule(breakpoint)(arr))
      return
    }

    arr.forEach(r => rules.push(r))
  })

  const css = rules.join('')

  return css
}

module.exports = space

