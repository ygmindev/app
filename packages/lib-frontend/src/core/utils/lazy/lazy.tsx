import type { ComponentType } from 'react';
import { lazy as _lazy } from 'react';

export const lazy = <TType extends object, TName extends keyof TType & string>(
  loader: (componentName?: string) => Promise<TType>,
): TType =>
  new Proxy({} as unknown as TType, {
    get: (_target: TType, name: TName) =>
      typeof name === 'string'
        ? _lazy(() =>
            loader(name).then((module) => ({ default: module[name] as unknown as ComponentType })),
          )
        : null,
  });
