import { ConfigStaticModel } from '@lib/config/core/core.models';
import type { GeneratorParamsModel } from '@tool/generate/tasks/generate/generate.models';

export type _GenerateConfigModel = ConfigStaticModel<Record<string, GeneratorParamsModel>>;
