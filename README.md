
# Space

Functional CSS white space utility microservice

https://space.now.sh

## Usage

Although this microservice can be hotlinked to,
the delay in server response will add a performance dent to your site.
Instead, it's recommended to either copy the results from a browser or use cURL.

```sh
curl https://space.now.sh > space.css
```

## Query params

The CSS output can be customized using the following parameters.

### `space`

Array of numbers in pixels for the white space scale.

E.g. `/?space=6,12,24,48`

### `breakpoints`

Array of numbers in ems for the breakpoints

E.g. `/?breakpoints=48,64`

For no breakpoints, pass a null value: `/?breakpoints=`

### `properties`

Array of CSS property strings to create rules for.

E.g. `/?properties=margin,padding`

## Quick Links

- [Non-responsive version](https://space.now.sh/?breakpoints=)
- [Small](https://space.now.sh/?breakpoints=&space=8,16,32)
- [Duodecimal scale](https://space.now.sh/?space=6,12,24,48)
- [Margin only](https://space.now.sh/?properties=margin,margin-top,margin-right,margin-bottom,margin-left)
- [Padding only](https://space.now.sh/?properties=padding,padding-top,padding-right,padding-bottom,padding-left)


[MIT License](LICENSE.md)

