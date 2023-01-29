import type {
  WithIdModel,
  WithIdResultModel,
} from '@lib/shared/core/decorators/withId/withId.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import isArray from 'lodash/isArray';

const _withId = <TType>(value: TType): WithIdModel & TType =>
  ({ ...(value || {}), id: (value as unknown as WithIdModel).id || uid() } as TType & WithIdModel);

export const withId = <TType>(value: TType): WithIdResultModel<TType> =>
  (isArray(value) ? value.map(_withId) : _withId(value)) as WithIdResultModel<TType>;
