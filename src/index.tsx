import React, { useEffect, useRef, forwardRef } from 'react';

export type ReactG2PlotProps<O> = {
  readonly className?: string;
  readonly Ctor: any;
  readonly options: O;
};

/**
 * 一个业务可用的 G2Plot React 组件
 */
export default forwardRef(function<O = any>(props: ReactG2PlotProps<O>, ref: any) {
  const { className, Ctor, options } = props;

  const $dom = useRef(undefined);
  const plotRef = useRef(undefined);

  /**
   * 同步 forward ref
   * @param source
   * @param target
   */
  function syncRef(source, target) {
    if (typeof target === 'function') {
      target(source.current);
    } else if (target) {
      target.current = source.current;
    }
  }

  /**
   * 如果存在则更新，否则就创建
   */
  function renderPlot() {
    if (plotRef.current) {
      // update
      plotRef.current.update(options);
    } else {
      // new
      plotRef.current = new Ctor($dom.current, options);
      plotRef.current.render();
    }

    syncRef(plotRef, ref);
  }

  /**
   * 销毁
   */
  function destoryPlot() {
    if (plotRef.current) {
      plotRef.current.destroy();
      plotRef.current = undefined;
    }
  }

  useEffect(() => {
    renderPlot();

    return () => {
      destoryPlot();
    };
  }, [options, Ctor]);

  // 默认添加 g2plot-for-react 的 class
  return <div className={`g2plot-for-react ${className || ''}`} ref={$dom} />;
});
