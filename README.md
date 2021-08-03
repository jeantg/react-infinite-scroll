# react-infinite-scroll &middot; [![npm version](https://img.shields.io/badge/npm-v1.0.1-blue)](https://www.npmjs.com/package/react-brazil-map)

A react component for infinite scroll

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save react-infinite-scroll

To install, you can use [yarn](https://https://yarnpkg.com/):

    $ yarn add react-infinite-scroll

### Props

| Props                                                                      | Options   | Default           | Description                                                     |
| -------------------------------------------------------------------------- | --------- | ----------------- | --------------------------------------------------------------- | --------------------------- |
| children                                                                   | Component | none              | Any component                                                   |
| variant                                                                    | string    | none              | A class name that will be passed to the component's parent div. |
| onLoad                                                                     | function  | none              |
| The function that will be called when the scroll reaches the top or bottom |
| debounceTimeOut                                                            | number    | 1000              | The time in milliseconds to wait until the function is called   |
| dir                                                                        | string    | "top" or "bottom" | "bottom"                                                        | The direction of the scroll |
