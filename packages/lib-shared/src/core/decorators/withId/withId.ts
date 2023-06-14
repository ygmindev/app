import isArray from 'lodash/isArray';

import type {
  WithIdModel,
  WithIdResultModel,
} from '#lib-shared/core/decorators/withId/withId.models';
import { uid } from '#lib-shared/core/utils/uid/uid';

const withIdF = <TType>(value: TType): WithIdModel & TType =>
  ({ ...(value || {}), id: (value as unknown as WithIdModel).id || uid() } as TType & WithIdModel);

export const withId = <TType>(value: TType): WithIdResultModel<TType> =>
  (isArray(value) ? value.map(withIdF) : withIdF(value)) as WithIdResultModel<TType>;
