import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { DependencyList, EffectCallback } from 'react';

export interface _DisplayModel {
  getDimension(): DimensionModel;
  open(
    uri: string,
    options: DimensionModel & { onClose?: CallableModel; onOpen?: CallableModel },
  ): unknown;
  subscribeMessage(cb: (event: MessageEvent) => unknown): unknown;
  subscribeResize(cb: () => unknown): unknown;
  unsubscribeMessage(cb: (event: MessageEvent) => unknown): unknown;
  unsubscribeResize(cb: () => unknown): unknown;
  useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
}
