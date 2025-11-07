import { _build } from '@tool/task/node/tasks/build/_build';
import { type BuildModel, type BuildParamsModel } from '@tool/task/node/tasks/build/build.models';

export const build = async (params: BuildParamsModel): Promise<BuildModel> => _build(params);
