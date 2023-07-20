## Min Viewport

This package allows you to specify a minimum viewport for your web application.

This is useful if you do not to spend valuable resources testing and adapting your application for screens under a
certain size, the minimum viewport will simply tell the browser to zoom out the entire content to fit the minimum size
requirement

This package handles all the events for you, so if the user resizes his screen or changes his screen orientation the viewport will either be set to the minimum or restored to it's original state

### Installation

`npm i @tofandel/min-viewport`

### Usage

```js
import minViewport from `@tofandel/min-viewport`

minViewport(400); // 400 being the minimum viewport size
```
