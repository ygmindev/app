import {
  type CreateEdgeModel,
  type CreateEdgeParamsModel,
} from '#lib-backend/resource/utils/createEdge/createEdge.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type EdgeModel } from '#lib-shared/resource/utils/Edge/Edge.models';

export const createEdge = <TType extends unknown>({
  Resource,
  name,
}: CreateEdgeParamsModel<TType>): CreateEdgeModel<TType> => {
  const nameF = `${name}Edge`;

  @withEntity({ name: nameF })
  class EdgeF implements EdgeModel<TType> {
    @withField({ Resource })
    node!: TType;

    @withField()
    cursor!: string;
  }

  return EdgeF;
};
