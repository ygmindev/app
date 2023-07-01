export type WithEntityParamsModel<TType> = {
  indices?: Array<Array<keyof TType>>;
  isAbstract?: boolean;
  isEmbedded?: boolean;
  isRepository?: boolean;
  isSchema?: boolean;
  isSchemaInput?: boolean;
  name?: string;
};
