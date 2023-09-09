import isArray from 'lodash/isArray';

import { uid } from '#lib-shared/core/utils/uid/uid';
import {
  type WithIdModel,
  type WithIdResultModel,
} from '#lib-shared/core/utils/withId/withId.models';

const withIdF = <TType>(value: TType): WithIdModel & TType =>
  ({ ...(value || {}), _id: (value as unknown as WithIdModel)._id || uid() }) as TType &
    WithIdModel;

export const withId = <TType>(value: TType): WithIdResultModel<TType> =>
  (isArray(value) ? value.map(withIdF) : withIdF(value)) as WithIdResultModel<TType>;
