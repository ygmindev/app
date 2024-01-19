import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type EdgeModel } from '@lib/shared/resource/utils/Edge/Edge.models';

export type CreateEdgeParamsModel<TType> = {
  Resource(): ResourceClassModel<TType>;
  name: string;
};

export type CreateEdgeModel<TType> = ResourceClassModel<EdgeModel<TType>>;
