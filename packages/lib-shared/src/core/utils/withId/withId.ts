import isArray from 'lodash/isArray';

import { uid } from '@lib/shared/core/utils/uid/uid';
import {
  type WithIdModel,
  type WithIdResultModel,
} from '@lib/shared/core/utils/withId/withId.models';

const withIdF = <TType extends unknown>(value: TType): WithIdModel & TType =>
  ({ ...(value || {}), id: (value as unknown as WithIdModel).id || uid() }) as TType & WithIdModel;

export const withId = <TType extends unknown>(value: TType): WithIdResultModel<TType> =>
  (Array.isArray(value) ? value.map(withIdF) : withIdF(value)) as WithIdResultModel<TType>;
