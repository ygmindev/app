import {
  type CreateEdgeModel,
  type CreateEdgeParamsModel,
} from '@lib/backend/resource/utils/createEdge/createEdge.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type EdgeModel } from '@lib/shared/resource/utils/Edge/Edge.models';

export const createEdge = <TType extends unknown>({
  Resource,
  name,
}: CreateEdgeParamsModel<TType>): CreateEdgeModel<TType> => {
  @withEntity({ name: `${name}Edge` })
  class EdgeF implements EdgeModel<TType> {
    @withField({ Resource, type: PROPERTY_TYPE.RESOURCE })
    node!: TType;

    @withField({ type: DATA_TYPE.STRING })
    cursor!: string;
  }
  return EdgeF;
};
