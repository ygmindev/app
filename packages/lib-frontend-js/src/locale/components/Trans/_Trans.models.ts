import { type ReactElement } from 'react';

export type _TransPropsModel<TParams> = {
  components?: Array<ReactElement>;
  i18nKey: string;
  ns: string;
  params?: TParams;
};
