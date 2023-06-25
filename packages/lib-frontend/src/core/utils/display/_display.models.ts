import type { DimensionModel } from '#lib-frontend/core/core.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type _DisplayModel = {
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
};
