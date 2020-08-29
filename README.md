# DelayedRenderer

A react component for delayed rendering of child components.

## Installation

The package can be installed via NPM:

```
npm install react-delayed-renderer
```

This package has no dependencies, only react and prop-types are peer dependencies that you have to install yourself, you need to install react version that supports hooks.

## Usage

```js
import { DelayedRenderer } from "react-delayed-renderer"
const Component = () => {
  // notice that changing delay will cause the children to be hidden again
  return (
    <DelayedRenderer delay={300} onRender={() => console.log("rendered")}>
      <div />
    </DelayedRenderer>
  )
}
```

| Prop     | Type     | Description                                                            |
| -------- | -------- | ---------------------------------------------------------------------- |
| delay    | Integer  | Delay in millesconds                                                   |
| onRender | Function | callback function to be called when the component renders the children |

## License

Licensed under MIT license, see [LICENSE](LICENSE) for the full license.
