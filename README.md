# Welcome to @icastro085/react-canrender 👋
![ci](https://github.com/conventional-changelog/standard-version/workflows/ci/badge.svg)
[![Version](https://img.shields.io/npm/v/@icastro085/react-canrender.svg)](https://www.npmjs.com/package/@icastro085/react-canrender)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D14-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/icastro085/react-canrender#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/icastro085/react-canrender/graphs/commit-activity)

### A small component to help render other components according a condition

## Install

### npm
```sh
npm i @icastro085/react-canrender
```

### yarn
```sh
yarn add @icastro085/react-canrender
```

## Usage example

### Take a look at the following presentational component, which contains a commonly used pattern for conditional rendering:

```jsx
const Container = ({ name }) => (
  <div>
    {name ? <span>My name is {name}!</span> : <span>Sorry, the name is missing.</span>}
  </div>
);
```

### With `React-CanRender` you can rewrite this into a more readable:

```jsx
const Container = ({ name }) => (
  <CanRender when={name?.length}>
    My name is {name}!
    <ElseRender>Sorry, the name is missing.</ElseRender>
  </CanRender>
);
```
## CanRender

```jsx
const Container = () => (
  <CanRender when={true}>
    Content to render when condition is true
  </CanRender>
);
```

## ElseRender

```jsx
const Container = () => (
  <CanRender when={false}>
    It will not render
    <ElseRender>Render when condition is false.</ElseRender>
  </CanRender>
);
```

## ElseCanRender

```jsx
const Container = () => (
  <CanRender when={false}>
    It will not render
    <ElseCanRender when={true}>
      Render when condition is false of parent and condition for it is true.
    </ElseCanRender>
    <ElseRender>It will not render.</ElseRender>
  </CanRender>
);

## Run tests

```sh
yarn test
```

## Author

👤 **Ivanildo de Castro <ivanildo.decastro085@gmail.com>**

* Github: [@icastro085](https://github.com/icastro085)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/icastro085\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/icastro085\/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/icastro085/react-canrender/issues). You can also take a look at the [contributing guide](https://github.com/icastro085/react-canrender/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Ivanildo de Castro <ivanildo.decastro085@gmail.com>](https://github.com/icastro085).

This project is [MIT](https://github.com/icastro085/react-canrender/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
