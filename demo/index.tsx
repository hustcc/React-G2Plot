import ReactDOM from 'react-dom';
import React from 'react';
import { Line } from '@antv/g2plot';

import ReactG2Plot from '../src';

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

// line chart config
const config = {
  title: {
    visible: true,
    text: '曲线折线图',
  },
  description: {
    visible: true,
    text: '用平滑的曲线代替折线。',
  },
  padding: 'auto',
  forceFit: true,
  data,
  xField: 'year',
  yField: 'value',
  smooth: true,
};

function ref(plot) {
  console.log('G2Plot instance Ref', plot);
}

ReactDOM.render(
  <ReactG2Plot className="g2plot-for-react" Ctor={Line} config={config} ref={ref} />,
  document.getElementById('root-container'),
);
