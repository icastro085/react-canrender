# Welcome to @icastro085/react-canrender 👋
![ci](https://github.com/conventional-changelog/standard-version/workflows/ci/badge.svg)
[![Version](https://img.shields.io/npm/v/@icastro085/react-canrender.svg)](https://www.npmjs.com/package/@icastro085/react-canrender)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D14-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/icastro085/react-canrender#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/icastro085/react-canrender/graphs/commit-activity)

> A small component to help render other components according a condition

## Prerequisites

- node >=14

## Install

```sh
npm i @icastro085/react-canrender
```

## What does this component do
Take a look at the following presentational component, which contains a commonly used pattern for conditional rendering:

```jsx
const Bar = ({ name }) => (
  <div>
    {name ? <span>My name is {name}!</span> : <span>Sorry, the name is missing.</span>}
  </div>
);
```

With `React-CanRend` you can rewrite this into a more readable:

```jsx
const Bar = ({ name }) => (
  <CanRender when={name?.length}>
    My name is {name}!
    <ElseRender>Sorry, the name is missing.</ElseRender>
  </CanRender>
);
```

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

Feel free to check [issues page](https://github.com/icastro085/react-canrender/issues). You can also take a look at the [contributing guide](https://github.com/icastro085/react-canrender/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Ivanildo de Castro <ivanildo.decastro085@gmail.com>](https://github.com/icastro085).

This project is [MIT](https://github.com/icastro085/react-canrender/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
