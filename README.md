# react-scroll-infinite &middot; [![npm version](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/package/react-scroll-infinite)

A react component for infinite scroll

![gif](gif.gif)

## Table of Contents

- [Installation](#installation)
- [Examples](#example)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save react-scroll-infinite

To install, you can use [yarn](https://https://yarnpkg.com/):

    $ yarn add react-scroll-infinite

### Props

| Props           | Options           | Default  | Description                                                                |
| --------------- | ----------------- | -------- | -------------------------------------------------------------------------- |
| children        | Component         | none     | Any component                                                              |
| variant         | string            | none     | A class name that will be passed to the component's parent div.            |
| onLoad          | function          | none     | The function that will be called when the scroll reaches the top or bottom |
| debounceTimeOut | number            | 1000     | The time in milliseconds to wait until the function is called              |
| dir             | "top" or "bottom" | "bottom" | The direction of the scroll                                                |

## Example

```jsx
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { CardPassengers, Props } from "./CardPassengers";
import InfiniteScroll from "react-scroll-infinite";

function App() {
  const [data, setData] = useState<Props[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const getPassengers = useCallback(async () => {
    setLoading(true);
    const response = await axios
      .get<{ data: Props[] }>("https://dummyapi.io/data/api/user", {
        headers: {
          "app-id": "lTE5abbDxdjGplutvTuc",
        },
        params: {
          page,
          limit: 45,
        },
      })
      .finally(() => setTimeout(() => setLoading(false), 3000));
    const users = response.data.data;

    setPage(page + 1);
    setData(page > 0 ? [...data, ...users] : users);
  }, [data, page]);

  useEffect(() => {
    getPassengers();
  }, []);
  return (
    <div className="app">
      <header>
        <h1>Users</h1>
      </header>

      <InfiniteScroll onLoad={getPassengers} variant="infinite">
        <ul>
          {data.map((user: Props) => (
            <CardPassengers key={user.id} {...user} />
          ))}
        </ul>
        {loading && <p>Loading</p>}
      </InfiniteScroll>
    </div>
  );
}
```
