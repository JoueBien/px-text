## Overview

Px text is a small sass function that allows for the quick conversion of pixels to rem. Its primary purpose is to allow programmers to convert text sizes from pixel measurements into rem without requiring a calculator.

  

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
`import {px} from 'px-text'`

### Example
```
import styled, { css } from 'styled-components'
import {px} from 'px-text'

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

> px-text@0.1.4 test C:\.. ..\px-text

> mocha

  

Running SASS Test

The function for px conversion to rem

√ px(16); Outputs 1rem

√ px(18); Outputs 1.125rem

√ px(32); Outputs 2rem

  

Running JS Test

The function for px conversion to rem

√ px(16); Outputs 1rem

√ px(18); Outputs 1.125rem

√ px(32); Outputs 2rem

  
  

6 passing (20ms)

```

  
  

## License

MIT https://github.com/JoueBien/px-text/blob/master/LICENSE

  
  

## Notes

  

Note that this library & documentation was written to work with the sass loader that vue uses. It should work with other frameworks but there are no guarantees that it will.

  

If you know how to use it with other front end frameworks feel free to make a pull request or open an issue.