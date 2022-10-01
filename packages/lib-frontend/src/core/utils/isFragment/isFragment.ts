import type { ComponentType, ExoticComponent, ReactElement, ReactNode } from 'react';
import { Fragment, isValidElement } from 'react';

export const isFragment = (value: ReactNode | ComponentType): boolean =>
  isValidElement(value) &&
  ((value as unknown as ExoticComponent) === Fragment || (value as ReactElement).type === Fragment);
