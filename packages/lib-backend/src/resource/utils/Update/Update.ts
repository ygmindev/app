import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import type { UpdateParamsModel } from '@lib/backend/resource/utils/Update/Update.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';

export const Update = <TType extends unknown>({
  Resource,
  name,
}: UpdateParamsModel<TType>): ConstructorModel<UpdateModel<TType>> => {
  @withEntity({ name: `${name}Update` })
  class _Update extends (Resource as unknown as ConstructorModel) {}
  return _Update;
};
