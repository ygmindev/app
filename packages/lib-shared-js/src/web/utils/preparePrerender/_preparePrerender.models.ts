import { type EmptyObjectModel } from '@lib/shared/core/core.models';
import { type OnBeforePrerenderStartAsync } from 'vike/types';

export type _PreparePrerenderParamsModel = {
  pages: Array<{ getContext?(): Promise<EmptyObjectModel>; pathname: string }>;
};

export type _PreparePrerenderModel = OnBeforePrerenderStartAsync;
