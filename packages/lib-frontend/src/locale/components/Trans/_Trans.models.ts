import type { ReactElement } from 'react';

export interface _TransPropsModel<TParams> {
  components?: Array<ReactElement>;
  i18nKey: string;
  ns: string;
  params?: TParams;
}
