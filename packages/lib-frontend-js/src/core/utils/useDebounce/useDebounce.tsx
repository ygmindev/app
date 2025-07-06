import {
  type UseDebounceModel,
  type UseDebounceParamsModel,
} from '@lib/frontend/core/utils/useDebounce/useDebounce.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = <TResult = void, TParams extends Array<unknown> = Array<unknown>>(
  ...[callback, options = {}]: UseDebounceParamsModel<TResult, TParams>
): UseDebounceModel<TResult, TParams> => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedRef = useRef(
    debounce((...params: TParams) => callbackRef.current(...params), options),
  );

  return useCallback((...params: TParams) => debouncedRef.current(...params), []);
};
