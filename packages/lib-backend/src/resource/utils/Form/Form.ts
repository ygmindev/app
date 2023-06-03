import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import type { FormParamsModel } from '@lib/backend/resource/utils/Form/Form.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import isFunction from 'lodash/isFunction';

export const Form = <TType extends unknown>({
  Resource,
  name,
}: FormParamsModel<TType>): ConstructorModel<TType> => {
  const nameF = `${name}Form`;
  const isResource = Resource && isFunction(Resource);

  @withEntity({ name: nameF })
  class _Form extends (isResource ? (Resource as unknown as ConstructorModel) : EntityResource) {}

  return _Form as ConstructorModel<TType>;
};
