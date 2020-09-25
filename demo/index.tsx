import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Line, Column } from '@antv/g2plot';
import ReactG2Plot from '../src';

const Data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
  { year: '2000', value: 4 },
  { year: '2001', value: 7 },
  { year: '2002', value: 2 },
  { year: '2003', value: 20 },
];

function Entry() {
  const [isLine, setIsLine] = useState<boolean>(true);
  const [data, setData] = useState<object[]>(Data);

  function ref(plot) {
    console.log('G2Plot instance Ref', plot.type);
  }

  function getCtor() {
    return isLine ? Line : Column;
  }

  function getOptions() {
    return isLine
      ? {
          data,
          xField: 'year',
          yField: 'value',
          smooth: true,
          appendPadding: 12,
        }
      : {
          data,
          xField: 'year',
          yField: 'value',
          appendPadding: 12,
        };
  }

  useEffect(() => {
    const id = setInterval(() => {
      // 切换
      if (Math.random() > 0.5) {
        setIsLine(!isLine);
      } else {
        setData(data.slice(0, 6 + Math.floor(Math.random() * 5)));
      }
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [isLine]);

  return <ReactG2Plot Ctor={getCtor()} options={getOptions()} ref={ref} />;
}

ReactDOM.render(<Entry />, document.getElementById('root-container'));
