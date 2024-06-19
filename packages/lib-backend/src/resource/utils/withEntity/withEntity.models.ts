export type WithEntityParamsModel<TType extends unknown> = {
  indices?: Array<{ keys: Array<keyof TType>; type?: 'text' }>;
  isAbstract?: boolean;
  isEmbeddable?: boolean;
  isRepository?: boolean;
  isSchema?: boolean;
  isSchemaInput?: boolean;
  name?: string;
};
