import { _withEntity } from '@lib/backend/resource/utils/withEntity/_withEntity';
import {
  type WithEntityModel,
  type WithEntityParamsModel,
} from '@lib/backend/resource/utils/withEntity/withEntity.models';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';

export const withEntity = <TType extends unknown>({
  isAbstract = false,
  name,
  ...params
}: WithEntityParamsModel<TType> = {}): WithEntityModel => {
  if (!name && !isAbstract) {
    throw new NotImplementedError('name for non-abstract entity');
  }
  return ((Base: TType) =>
    _withEntity({ ...params, isAbstract, name })(Base as () => unknown)) as WithEntityModel;
};
