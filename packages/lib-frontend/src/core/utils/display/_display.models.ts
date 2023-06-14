import type { DependencyList, EffectCallback } from 'react';

import type { DimensionModel } from '#lib-frontend/core/core.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export interface _DisplayModel {
  getDimension(): DimensionModel;
  open(
    uri: string,
    options: DimensionModel & { onClose?: CallableModel; onOpen?: CallableModel },
  ): void;
  subscribeEvent<TType extends Event>(name: string, cb: (event: TType) => void): void;
  subscribeMessage(cb: (event: MessageEvent) => void): void;
  subscribeResize(cb: () => void): void;
  unsubscribeEvent<TType extends Event>(name: string, cb: (event: TType) => void): void;
  unsubscribeMessage(cb: (event: MessageEvent) => void): void;
  unsubscribeResize(cb: () => void): void;
  useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
}
