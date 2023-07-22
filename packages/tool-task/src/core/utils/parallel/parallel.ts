import { _parallel } from '#tool-task/core/utils/parallel/_parallel';
import {
  type ParallelModel,
  type ParallelParamsModel,
} from '#tool-task/core/utils/parallel/parallel.models';

export const parallel = async (params: ParallelParamsModel): Promise<ParallelModel> =>
  _parallel(...params);
