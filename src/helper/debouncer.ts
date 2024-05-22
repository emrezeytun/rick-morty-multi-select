function debouncer<T extends (...args: any[]) => any>(func: T, wait: number, immediate: boolean): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null;

  return function executedFunction(this: any, ...args: Parameters<T>) {
    let context = this;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export default debouncer;
