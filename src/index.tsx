import React, { useEffect, useRef, forwardRef } from 'react';

export type ReactG2PlotProps = {
  readonly className?: string;
  readonly Ctor: any;
  readonly config: object;
};

/**
 * 一个基本可用的 G2Plot React 组件
 */
export default forwardRef((props: ReactG2PlotProps, ref: any) => {
  const { className, Ctor, config } = props;

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
   * 创建
   */
  function newPlot() {
    if (plotRef.current) {
      plotRef.current.destroy();
      plotRef.current = undefined;
    }

    plotRef.current = new Ctor($dom.current, config);

    syncRef(plotRef, ref);

    plotRef.current.render();
  }

  useEffect(() => {
    newPlot();

    return () => {
      if (plotRef.current) {
        plotRef.current.destroy();
        plotRef.current = undefined;
      }
    };
  }, [Ctor, config]);

  return <div className={className} ref={$dom} />;
});
