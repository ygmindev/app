import {
  type _SchemaGenerateModel,
  type _SchemaGenerateParamsModel,
} from '@tool/task/generate/utils/schemaGenerate/_schemaGenerate.models';

export type SchemaGenerateParamsModel = Pick<_SchemaGenerateParamsModel, 'tsconfigPathname'>;

export type SchemaGenerateModel = _SchemaGenerateModel;
