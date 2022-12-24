import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { ReactElement } from 'react';

export interface _TransPropsModel<TParams> extends WithStyleModel {
  Components?: Array<ReactElement>;
  i18nKey: string;
  ns: string;
  params?: TParams;
}
