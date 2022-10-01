import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { ReactElement } from 'react';

export interface _TransPropsModel<TParams> extends WithStyleParamsModel {
  Components?: Array<ReactElement>;
  i18nKey: string;
  ns: string;
  params?: TParams;
}
