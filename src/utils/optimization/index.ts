export function debounce<F extends (...args: any[]) => void>(callback: F, delay = 300): (...args: Parameters<F>) => void {
  let timerId: number | null = null;
  return (...args: Parameters<F>) => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export function throttle<F extends (...args: any[]) => void>(callback: F, limit = 300): (...args: Parameters<F>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<F>) => {
    if (!inThrottle) {
      callback(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

