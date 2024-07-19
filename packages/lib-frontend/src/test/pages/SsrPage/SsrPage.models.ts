import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type SSR } from '@lib/frontend/test/test.constants';

export type SsrPagePropsModel = PagePropsModel<SsrPageParamsModel>;

export type SsrPageParamsModel = {
  [SSR]: string;
};
