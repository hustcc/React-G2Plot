/**
 * debounce function
 * @param fn
 * @param delay
 */
export const debounce = (fn: Function, delay: number = 100): Function => {
  let timer = null;

  return function(...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/**
 * size
 * @param v
 */
export const size = (v: any): number => {
  if (!v) return 0;

  if (Array.isArray(v)) {
    return v.length;
  }

  if (typeof v === 'object') {
    return Object.keys(v).length;
  }

  return 0;
};

/**
 * get
 * @param v
 * @param path
 */
export const get = (v: any, path: string[], def?: any): any => {
  let r = v;
  for (let p of path) {
    if (r === undefined) break;

    r = r[p];
  }

  return r === undefined ? def : r;
};
