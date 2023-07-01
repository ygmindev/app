import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { type ConnectionParamsModel } from '#lib-backend/resource/utils/Connection/Connection.models';
import { Edge } from '#lib-backend/resource/utils/Edge/Edge';
import { PageInfo } from '#lib-backend/resource/utils/PageInfo/PageInfo';
import { type ClassModel } from '#lib-shared/core/core.models';
import {
  type ConnectionModel,
  type EdgeModel,
  type PageInfoModel,
} from '#lib-shared/resource/utils/Connection/Connection.models';

export const Connection = <TType extends unknown>({
  Resource,
  name,
}: ConnectionParamsModel<TType>): ClassModel<ConnectionModel<TType>> => {
  const nameF = `${name}Connection`;

  @withEntity({ name: nameF })
  class ConnectionF implements ConnectionModel<TType> {
    @withField({ Resource: Edge({ Resource, name }), isArray: true })
    edges!: Array<EdgeModel<TType>>;

    @withField({ Resource: PageInfo })
    pageInfo!: PageInfoModel;
  }

  return ConnectionF;
};
