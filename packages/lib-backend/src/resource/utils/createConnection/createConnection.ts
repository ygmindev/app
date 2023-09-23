import {
  type CreateConnectionModel,
  type CreateConnectionParamsModel,
} from '#lib-backend/resource/utils/createConnection/createConnection.models';
import { createEdge } from '#lib-backend/resource/utils/createEdge/createEdge';
import { PageInfo } from '#lib-backend/resource/utils/PageInfo/PageInfo';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';
import { type EdgeModel } from '#lib-shared/resource/utils/Edge/Edge.models';
import { type PageInfoModel } from '#lib-shared/resource/utils/PageInfo/PageInfo.models';

export const createConnection = <TType extends unknown>({
  Resource,
  name,
}: CreateConnectionParamsModel<TType>): CreateConnectionModel<TType> => {
  const nameF = `${name}Connection`;

  @withEntity({ name: nameF })
  class ConnectionF implements ConnectionModel<TType> {
    @withField({ Resource: () => createEdge({ Resource, name }), isArray: true })
    edges!: Array<EdgeModel<TType>>;

    @withField({ Resource: () => PageInfo })
    pageInfo!: PageInfoModel;
  }

  return ConnectionF;
};
