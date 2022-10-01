import type { RefObject } from 'react';

export interface WithForwardedRefPropsModel<TType = unknown> {
  forwardedRef?: RefObject<TType>;
}
