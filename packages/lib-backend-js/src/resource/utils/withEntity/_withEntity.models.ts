export type _WithEntityParamsModel<TType extends unknown> = {
  indices?: Array<{ keys: Array<keyof TType>; type?: 'text' }>;
  isAbstract?: boolean;
  isDatabase?: boolean;
  isEmbeddable?: boolean;
  isSchema?: boolean;
  isSchemaInput?: boolean;
  name?: string;
};

export type _WithEntityModel = ClassDecorator;
