import { config as schemaConfig } from '@lib/config/schema/schema';
import { _schemaGenerate } from '@tool/task/generate/utils/schemaGenerate/_schemaGenerate';
import {
  type SchemaGenerateModel,
  type SchemaGenerateParamsModel,
} from '@tool/task/generate/utils/schemaGenerate/schemaGenerate.models';

export const schemaGenerate = async ({
  tsconfigPathname,
}: SchemaGenerateParamsModel): Promise<SchemaGenerateModel> =>
  _schemaGenerate({
    ...schemaConfig.params(),
    tsconfigPathname,
  });
