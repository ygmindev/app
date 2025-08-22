import { type SchemaConfigModel } from '@lib/config/schema/schema.models';

export type _SchemaGenerateParamsModel = SchemaConfigModel & {
  tsconfigPathname?: string;
};

export type _SchemaGenerateModel = void;
