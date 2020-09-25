import ReactDOM from 'react-dom';
import React from 'react';
import { Line } from '@antv/g2plot';

import ReactG2Plot from '../src';

/**
 * 创建一个 div 节点，并放到 container，默认放到 body 上
 * @param container
 */
export function createDiv(container: HTMLElement = document.body): HTMLElement {
  const div = document.createElement('div');

  container.appendChild(div);

  return div;
}

describe('ReactG2Plot', () => {
  test('line', () => {
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
    const options = {
      data,
      xField: 'year',
      yField: 'value',
      smooth: true,
    };

    // render g2plot react component
    ReactDOM.render(<ReactG2Plot Ctor={Line} options={options} />, createDiv());

    expect(document.querySelector('.g2plot-for-react')).not.toBeNull();
  });
});
