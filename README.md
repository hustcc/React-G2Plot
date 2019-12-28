# React-G2Plot


> `react-g2plot` is an unofficial react component wrapper for [@antv/g2plot](https://github.com/antvis/G2Plot). 


[![npm](https://img.shields.io/npm/v/react-g2plot.svg)](https://www.npmjs.com/package/react-g2plot)
[![Build Status](https://github.com/hustcc/react-g2plot/workflows/build/badge.svg)](https://github.com/hustcc/react-g2plot/actions)
[![npm](https://img.shields.io/npm/dm/react-g2plot.svg)](https://www.npmjs.com/package/react-g2plot)
[![react supported](https://img.shields.io/badge/React-%5E0.14.0%20%7C%7C%20%5E15.0.0%20%7C%7C%20%5E16.0.0-blue.svg)](https://github.com/hustcc/react-g2plot)
[![npm](https://img.shields.io/npm/l/react-g2plot.svg)](https://www.npmjs.com/package/react-g2plot)



## Install

```bash
$ npm install react-g2plot
``` 



## Usage

```jsx
import ReactDOM from 'react-dom';
import React from 'react';

import { Line } from '@antv/g2plot'
import ReactG2Plot from 'react-g2plot';

ReactDOM.render(
  <ReactG2Plot
    className="your-classname"
    Ctor={Line}
    config={config}
  />,
  mountNode,
);
```


## Documents

All documents about `plot` and `config` are [here](https://g2plot.antv.vision/).



## Development

```bash
$ npm install

# run test case
$ npm run test

# run live demo
$ npm run demo
```


## LICENSE

MIT@[hustcc](https://github.com/hustcc).


