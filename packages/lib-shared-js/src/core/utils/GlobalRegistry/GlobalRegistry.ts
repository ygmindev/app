import { type GlobalRegistryModel } from '@lib/shared/core/utils/GlobalRegistry/GlobalRegistry.models';

export const GlobalRegistry: GlobalRegistryModel = {
  provide: <TType extends unknown>(key: string, factory: () => TType): TType => {
    const symbol = Symbol.for(`globalRegistry.${key}`);
    const globalScope = globalThis as Record<symbol, TType>;
    if (!globalScope[symbol]) {
      globalScope[symbol] = factory();
    }
    return globalScope[symbol];
  },
};
