import type { WithInputParamsModel } from '@lib/backend/resource/decorators/withInput/withInput.models';
import { Input } from '@lib/backend/resource/utils/Input/Input';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { Arg as ArgDecorator } from 'type-graphql';

export const withInput = <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
  Resource,
  Root,
  method,
  name,
}: WithInputParamsModel<TMethod, TType, TRoot>): ParameterDecorator => {
  const _name = `${name}${method}`;
  const _Input = Input({ Resource, Root, method, name: _name });
  return ArgDecorator('input', () => _Input);
};
