import { _schemaGenerate } from '@tool/task/generate/utils/schemaGenerate/_schemaGenerate';
import {
  type SchemaGenerateModel,
  type SchemaGenerateParamsModel,
} from '@tool/task/generate/utils/schemaGenerate/schemaGenerate.models';

export const schemaGenerate = async ({
  ...params
}: SchemaGenerateParamsModel): Promise<SchemaGenerateModel> => _schemaGenerate({ ...params });
