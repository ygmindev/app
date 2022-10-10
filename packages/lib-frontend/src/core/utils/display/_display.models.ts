import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { DependencyList, EffectCallback } from 'react';

export interface _DisplayModel {
  getDimension(): DimensionModel;
  open(
    uri: string,
    options: DimensionModel & { onClose?: CallableModel; onOpen?: CallableModel },
  ): void;
  subscribeMessage(cb: (event: MessageEvent) => void): void;
  subscribeResize(cb: () => void): void;
  unsubscribeMessage(cb: (event: MessageEvent) => void): void;
  unsubscribeResize(cb: () => void): void;
  useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
}
