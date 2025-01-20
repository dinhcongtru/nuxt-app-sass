export const useDebounce = <T extends (...args: any[]) => void>(
    mainFunction: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timer: ReturnType<typeof setTimeout>;
  
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };