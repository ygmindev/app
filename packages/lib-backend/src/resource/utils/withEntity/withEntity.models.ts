export type WithEntityParamsModel<TType extends unknown> = {
  indices?: Array<Array<keyof TType>>;
  isAbstract?: boolean;
  isEmbeddable?: boolean;
  isRepository?: boolean;
  isSchema?: boolean;
  isSchemaInput?: boolean;
  name?: string;
};
