import { type QueryClient } from '@tanstack/react-query';
import { type ReactNode } from 'react';

import { type NUMBER_UNIT_AMOUNT, type NUMBER_UNIT_RATE } from '#lib-frontend/data/data.constants';
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

export type NumberUnitAmountModel = `${NUMBER_UNIT_AMOUNT}`;

export type NumberUnitRateModel = `${NUMBER_UNIT_RATE}`;

export type NumberUnitModel = NumberUnitAmountModel | NumberUnitRateModel;
