## Overview

Px text is a small sass and js function that allows for the quick conversion of pixels to rem. Its primary purpose is to allow programmers to convert text sizes from pixel measurements into rem without requiring a calculator.

  

## Install

```npm install --save px-text```

## SASS

### Import in sass

```@import 'node_modules/px-text/index.scss';```

### Import using sass loader

```@import 'px-text/index.scss';```

### Example
```
body {

font-size: px(18);

line-height: px(21);

}

```

## Node and Styled Components
### Import js
```
import {px} from 'px-text'

# OR

import px from 'px-text'
```

### Example
```
import styled, { css } from 'styled-components'
import px from 'px-text'

const containerStyles = css`
	p {
		font-size: ${px(16)};
	}
`

const Container = styled.div`
    font-size: ${px(16)};
`
```

  

## Testing

Running

``` npm test ```

should ouput the following

```

> px-text@0.1.6 test
> mocha



  Running SASS Test
    The function for px conversion to rem
      √  px(16); Outputs 1rem
      √  px(18); Outputs 1.125rem
      √  px(32); Outputs 2rem

  Running JS Test
    The function for px conversion to rem
      √  px(16); Outputs 1rem
      √  px(18); Outputs 1.125rem
      √  px(32); Outputs 2rem
    The function for px conversion to rem when using the default export
      √  px(16); Outputs 1rem
      √  px(18); Outputs 1.125rem
      √  px(32); Outputs 2rem


  9 passing (5ms)

```

  
  

## License

MIT https://github.com/JoueBien/px-text/blob/master/LICENSE

  
  

## Notes

This library & documentation was originally written to work with the sass loader that vue 2 used. It should work with other frameworks but there are no guarantees that it will.

It is currently working with React, Svelte, Vue 2 and Vue 3. The `0.2.0` release is designed to work with more modern environments.

For vue 2 projects you may wish to use version `0.1.5` as it uses an earlier version of SASS. 

If you know how to use it with other front end frameworks feel free to make a pull request or open an issue.