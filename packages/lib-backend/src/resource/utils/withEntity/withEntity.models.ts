export type WithEntityParamsModel<TType extends unknown> = {
  indices?: Array<Array<keyof TType>>;
  isAbstract?: boolean;
  isEmbedded?: boolean;
  isRepository?: boolean;
  isSchema?: boolean;
  isSchemaInput?: boolean;
  name?: string;
};
