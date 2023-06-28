import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { Args } from '#lib-backend/resource/utils/Args/Args';
import type { InputParamsModel } from '#lib-backend/resource/utils/Input/Input.models';
import type { ClassModel } from '#lib-shared/core/core.models';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import type { InputModel } from '#lib-shared/resource/utils/Input/Input.models';

export const Input = <TMethod extends ResourceMethodTypeModel, TType, TForm, TRoot = undefined>({
  Resource,
  RootResource,
  method,
  name,
}: InputParamsModel<TMethod, TType, TForm, TRoot>): ClassModel<
  InputModel<TMethod, TType, TForm, TRoot>
> => {
  @withEntity({ name })
  class _Input extends Args({ Resource, RootResource, method, name }) {}
  return _Input as ClassModel<InputModel<TMethod, TType, TForm, TRoot>>;
};
