import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import {
  type GetAppRootModel,
  type GetAppRootParamsModel,
} from '@lib/backend/file/utils/getAppRoot/getAppRoot.models';
import { getPackages } from '@lib/backend/file/utils/getPackages/getPackages';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';

export const getAppRoot = async (params: GetAppRootParamsModel): Promise<GetAppRootModel> => {
  const packages = await getPackages();
  for (const pkg of packages) {
    try {
      const { name } = packageInfo(fromPackages(pkg));
      if (name === params) {
        return fromPackages(pkg);
      }
    } catch {
      continue;
    }
  }
  throw new NotFoundError(params);
};
