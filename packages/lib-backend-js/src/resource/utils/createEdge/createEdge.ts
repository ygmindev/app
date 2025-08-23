import {
  type CreateEdgeModel,
  type CreateEdgeParamsModel,
} from '@lib/backend/resource/utils/createEdge/createEdge.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type EdgeModel } from '@lib/shared/resource/utils/Edge/Edge.models';

export const createEdge = <TType extends unknown>({
  Resource,
  name,
}: CreateEdgeParamsModel<TType>): CreateEdgeModel<TType> => {
  @withEntity({ name: `${name}Edge` })
  class EdgeF implements EdgeModel<TType> {
    @withField({ type: DATA_TYPE.STRING })
    cursor!: string;

    @withField({ Resource })
    node!: TType;
  }
  return EdgeF;
};
