import type {
  UseMountModel,
  UseMountParamsModel,
} from '@lib/frontend/core/hooks/useMount/useMount.models';
import { useEffect, useState } from 'react';

export const useMount = (
  ...[
    { onMount, onUnmount } = { onMount: undefined, onUnmount: undefined },
    deps = [],
  ]: UseMountParamsModel
): UseMountModel => {
  const [isMounted, isMountedSet] = useState<boolean>(false);
  useEffect(() => {
    isMountedSet(true);
    onMount && onMount();
    return () => {
      isMountedSet(false);
      onUnmount && onUnmount();
    };
  }, [isMounted, isMountedSet, ...deps]);
  return isMounted;
};
