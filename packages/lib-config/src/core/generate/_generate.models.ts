import { ConfigStaticModel } from '@lib/config/core/core.models';
import type { GeneratorParamsModel } from '@tool/generate/tasks/generate/generate.models';

export type GenerateConfigModel = ConfigStaticModel<Record<string, GeneratorParamsModel>>;

export type _GenerateConfigModel = GenerateConfigModel;
