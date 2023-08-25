import { type QueryClient } from '@tanstack/react-query';
import { type ReactNode } from 'react';

import { type StringKeyModel } from '#lib-shared/core/core.models';

export type QueryContextModel = {
  client?: QueryClient;
  state?: object;
};

export type DataRendererModel<TType> = (params: { row: TType; value?: string }) => ReactNode;

export type DataFormatterModel<TType, TKey extends StringKeyModel<TType>> = (params: {
  row: TType;
  value: TType[TKey];
}) => string;
