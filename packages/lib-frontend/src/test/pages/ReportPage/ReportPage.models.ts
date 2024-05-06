import { type PagePropsModel } from '@lib/frontend/core/core.models';

export type ReportPagePropsModel = PagePropsModel<{
  tests?: Array<string>;
}>;
