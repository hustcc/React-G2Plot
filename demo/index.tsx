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
];

const LineConfig = {
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
  data: Data,
  xField: 'year',
  yField: 'value',
  smooth: true,
};

const ColumnConfig = {
  title: {
    visible: true,
    text: '柱形图',
  },
  description: {
    visible: true,
    text: '使用柱形图展示每一年的对比情况。',
  },
  padding: 'auto',
  forceFit: true,
  data: Data,
  xField: 'year',
  yField: 'value',
};

function Entry() {
  const [isLine, setIsLine] = useState<boolean>(true);

  function ref(plot) {
    console.log('G2Plot instance Ref', plot);
  }

  function getCtor() {
    return isLine ? Line : Column;
  }

  function getConfig() {
    return isLine ? LineConfig : ColumnConfig;
  }

  useEffect(() => {
    const id = setInterval(() => {
      // 切换
      setIsLine(!isLine);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [isLine]);

  return <ReactG2Plot className="g2plot-for-react" Ctor={getCtor()} config={getConfig()} ref={ref} />;
}

ReactDOM.render(<Entry />, document.getElementById('root-container'));
