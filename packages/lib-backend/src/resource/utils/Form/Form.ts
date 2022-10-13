import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import type { FormParamsModel } from '@lib/backend/resource/utils/Form/Form.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';

export const Form = <TType>({
  Resource,
  name,
}: FormParamsModel<TType>): ConstructorModel<TType> => {
  const _name = `${name}Form`;

  @withEntity({ name: _name })
  class _Form extends (Resource as unknown as ConstructorModel) {}

  return _Form as ConstructorModel<TType>;
};
