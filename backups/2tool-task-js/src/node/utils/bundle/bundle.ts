import { _bundle } from '@tool/task/node/utils/bundle/_bundle';
import {
  type BundleModel,
  type BundleParamsModel,
} from '@tool/task/node/utils/bundle/bundle.models';

export const bundle = async ({ ...params }: BundleParamsModel): Promise<BundleModel> =>
  _bundle({ ...params });
