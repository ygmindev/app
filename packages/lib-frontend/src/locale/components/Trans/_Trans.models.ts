import type { ReactElement } from 'react';

export interface _TransPropsModel<TParams> {
  Components?: Array<ReactElement>;
  i18nKey: string;
  ns: string;
  params?: TParams;
}
