import type { StylePropsModel } from '@lib/frontend/core/core.models';
import type { ReactElement } from 'react';

export interface _TransPropsModel<TParams> extends StylePropsModel {
  Components?: Array<ReactElement>;
  i18nKey: string;
  ns: string;
  params?: TParams;
}
