import React, { PureComponent } from 'react';
import { debounce, get, size } from './helper';

export type ReactG2PlotProps = {
  readonly className?: string;
  readonly Ctor: any;
  readonly config: object;
};

/**
 * 一个基本可用的 G2Plot React 组件
 */
export default class extends PureComponent<ReactG2PlotProps> {
  /** container */
  private $dom: HTMLElement;
  /** G2Plot Ctor */
  private plot: any;

  /**
   * get G2Plot instance
   */
  public getPlot() {
    return this.plot;
  }

  componentDidMount() {
    this.newPlot();
  }

  componentDidUpdate(prevProps) {
    const { Ctor, config } = prevProps;

    if (size(get(this.props, ['config', 'data'])) && JSON.stringify(this.props.config) !== JSON.stringify(config)) {
      // 只有有数据的时候才去渲染
      // 构造函数变化，则重新创建；或者 chart 不存在
      if (this.props.Ctor !== Ctor || !this.plot) {
        this.newPlot();
      } else {
        this.updatePlot();
      }
    }
  }

  /**
   * 创建 chart
   */
  private newPlot() {
    const { Ctor, config } = this.props;

    if (this.plot) {
      this.plot.destroy();
      this.plot = undefined;
    }

    this.plot = new Ctor(this.$dom, config);

    this.batchRender();
  }

  /**
   * 更新 chart
   */
  private updatePlot() {
    if (this.plot) {
      this.plot.updateConfig(this.props.config);

      this.batchRender();
    }
  }

  /**
   * 对 chart.render 加上 debounce
   */
  private batchRender = debounce(() => {
    if (this.plot) {
      this.plot.render();
    }
  });

  render() {
    const { className } = this.props;

    return <div className={className} ref={(e) => (this.$dom = e)} />;
  }
}
