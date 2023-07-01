import { type ClassModel } from '#lib-shared/core/core.models';

export type WithEntityParamsModel<TType> = {
  base?: ClassModel;
  indices?: Array<Array<keyof TType>>;
  isAbstract?: boolean;
  isEmbedded?: boolean;
  isRepository?: boolean;
  isSchema?: boolean;
  isSchemaInput?: boolean;
  name?: string;
};
