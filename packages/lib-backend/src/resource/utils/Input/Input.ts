import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withRoot } from '@lib/backend/resource/decorators/withRoot/withRoot';
import { Args } from '@lib/backend/resource/utils/Args/Args';
import type { InputParamsModel } from '@lib/backend/resource/utils/Input/Input.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';

export const Input = <TMethod extends ResourceMethodTypeModel, TType, TForm, TRoot = undefined>({
  Resource,
  Root,
  method,
  name,
}: InputParamsModel<TMethod, TType, TForm, TRoot>): ConstructorModel<
  InputModel<TMethod, TType, TForm, TRoot>
> => {
  @withEntity({ name })
  @withRoot({ Root, name })
  class _Input extends ((Args({ Resource, method, name }) as ConstructorModel) || class {}) {}
  return _Input as ConstructorModel<InputModel<TMethod, TType, TForm, TRoot>>;
};
