import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import type { ConnectionParamsModel } from '#lib-backend/resource/utils/Connection/Connection.models';
import { Edge } from '#lib-backend/resource/utils/Edge/Edge';
import { PageInfo } from '#lib-backend/resource/utils/PageInfo/PageInfo';
import type { ConstructorModel } from '#lib-shared/core/core.models';
import type {
  ConnectionModel,
  EdgeModel,
} from '#lib-shared/resource/utils/Connection/Connection.models';
import { PageInfoModel } from '#lib-shared/resource/utils/Connection/Connection.models';

export const Connection = <TType extends unknown>({
  Resource,
  name,
}: ConnectionParamsModel<TType>): ConstructorModel<ConnectionModel<TType>> => {
  const nameF = `${name}Connection`;

  @withEntity({ name: nameF })
  class _Connection implements ConnectionModel<TType> {
    @withField({ Resource: Edge({ Resource, name }), isArray: true })
    edges!: Array<EdgeModel<TType>>;

    @withField({ Resource: PageInfo })
    pageInfo!: PageInfoModel;
  }

  return _Connection;
};
