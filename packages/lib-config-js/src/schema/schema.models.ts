import { type WithFieldParamsModel } from '@lib/backend/resource/utils/withField/withField.models';

export type SchemaConfigModel = {
  modelExtension: string;
  root: string;
  schemaFilename: string;
};

export type FieldSchemaModel = Pick<
  WithFieldParamsModel<unknown>,
  'isArray' | 'isOptional' | 'type'
>;
